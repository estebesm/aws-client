import {useFormik} from "formik";
import * as Yup from "yup";

export const useAuthFormik = (onSubmit: ({email, password}: {email: string, password: string}) => void) => {
    return useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters or more')
                .required('Required'),
        }),
        onSubmit,
    });
}