export async function useAuth(usr:string, pass:string) {
    const axios = useNuxtApp().$axios;
    const api = 'http://10.147.17.139:5041/auth/login/restaurant';

    const data = await axios.post(api, {
        username: usr,
        password: pass
    },{
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    })

    return data;
}