import axios from "axios";

const BASE_URL= 'https://qjyn5hpegf.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/'
//const BASE_URL = 'http://ec2-44-202-244-46.compute-1.amazonaws.com/api/v1/users/'

// 'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//     'Access-Control-Allow-Credentials' : true,
//     'Content-Type': 'application/json'

//axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
const config = {
    headers: {
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*",
        //"Access-Control-Allow-Credentials": true,
    }
}

export const signIn = async ({email, password}: {email: string, password: string}) => {
    try {
        return await axios.post(BASE_URL+'signIn', {
            email, password
        }, config);
    } catch (e){
        console.log(e)
    }
}

export const signUp = async ({email, password}:{email: string, password: string}) => {
    try {
        return await axios.post(BASE_URL+'signUp', {
            email, password
        });
    } catch (e){
        console.log(e)
    }
}
