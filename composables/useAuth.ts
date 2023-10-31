export async function useAuth(usr:string, pass:string) {
    const axios = useNuxtApp().$axios;
    const api = 'http://10.147.17.253:5041/auth/login/restaurant';

    const data = await axios.post(api, {
        username: usr,
        password: pass
    },{
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    ).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    })

    return data;
}