import {useCallback, useContext} from "react";
import {AuthorizationContext} from "../context/authContext";
import {signIn as signInApi, signUp as signUpApi} from "../api/auth"

interface DataForAuth {
    email: string
    password: string
}

export const useAuthorization = () => {
    const {setUserData, removeUserData, token} = useContext(AuthorizationContext)

    const signIn = useCallback(async ({email, password}: DataForAuth) => {
        try {
            const data = await signInApi({email, password})
            setUserData({token: data?.data.token})
        } catch (e){
            alert('Попробуйте позже')
        }
    }, [setUserData])

    const signUp = useCallback(async ({email, password}: DataForAuth) => {
        try {
            const data = await signInApi({email, password})
            setUserData({token: data?.data.token})
            await signIn({email, password})
        } catch (e){
            alert('Попробуйте позже')
        }

    }, [setUserData, signIn])

    const logout = () => {
        setUserData({token: ''})
    }

    return {signIn, token, signUp, logout}
}