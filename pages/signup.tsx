import React, {FormEvent, useEffect} from 'react';
import {Container} from "../src/ui/Container";
import {Paper} from "../src/ui/Paper";
import {Input} from "../src/ui/Input";
import {SubmitButton} from "../src/ui/Button";
import Link from "next/link";
import styled from "styled-components";
import {ErrorText} from "../src/ui/ErrorText";
import {useAuthFormik} from "../src/hooks/useAuthFormik";
import {useRouter} from "next/router";
import {useAuthorization} from "../src/hooks/useAuthorization";

const Form = styled.form`
  @media (min-width: 575.98px) {
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
    max-width: 600px;
  }
`

const SignUp = () => {
    const router = useRouter()
    const {signUp, token, fetching} = useAuthorization()
    const formik = useAuthFormik(signUp)
    useEffect(() => {
        if(token){
            router.push('/')
        }
    }, [token])

    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        formik.handleSubmit(e);
    }

    return (
        <>
            <Paper>
                <Container>
                    <Form onSubmit={submitHandler}>
                        <h1 style={{textAlign: 'center'}}>sign up</h1>
                        <div style={{margin: '10px 0'}}>
                            <Input placeholder={'email'}
                                   error={Boolean(formik.touched.email && formik.errors.email)}
                                   name={'email'}
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   type={'email'}
                            />
                            <ErrorText>{formik.touched.email && formik.errors.email}</ErrorText>
                        </div>
                        <div style={{margin: '10px 0'}}>
                            <Input placeholder={'password'}
                                   error={Boolean(formik.touched.password && formik.errors.password)}
                                   name={'password'}
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   type={'password'}
                            />
                            <ErrorText>{formik.touched.password && formik.errors.password}</ErrorText>
                        </div>
                        <SubmitButton style={{marginTop: 10}}
                                      disabled={fetching}
                                      fetching={fetching}
                        >
                            sign up
                        </SubmitButton>
                        <p style={{
                            textAlign: 'center',
                            marginTop: 20
                        }}>
                            <span>
                                {`Already have an account?`}
                            </span>
                            <Link href={'/signin'} style={{
                                marginLeft: 10,
                                fontSize: 'var(--fs-lg)',
                                color: 'var(--color-primary)'
                            }}>
                                Sign in
                            </Link>
                        </p>
                    </Form>
                </Container>
            </Paper>
        </>
    );
};

export default SignUp;