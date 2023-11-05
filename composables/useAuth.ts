export async function useAuth(usr:string, pass:string) {
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig();
    const api = runtime.public.API_URL + 'auth/login/restaurant'    

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