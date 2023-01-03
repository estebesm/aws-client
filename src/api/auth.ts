import axios from "axios";

const BASE_URL= 'https://4rf4dmw3ba.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/'

// 'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//     'Access-Control-Allow-Credentials' : true,
//     'Content-Type': 'application/json'

//axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const signIn = async ({email, password}: {email: string, password: string}) => {
    try {
        console.log(axios.defaults.headers)
        return await axios.post(BASE_URL+'signIn', {
            email, password
        });
    } catch (e){
        console.log(e)
    }
}

export const signUp = async (email: string, password: string) => {
    try {
        return await axios.post(BASE_URL+'signUp', {
            email, password
        });
    } catch (e){
        console.log(e)
    }
}
