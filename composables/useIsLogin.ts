export async function useIsLogin() {
    const axios = useNuxtApp().$axios;
    const api = 'http://10.147.17.253:5041/token';

    const cookie = useCookie('token')
    let status


    await axios.get(api, {
        params: {
            token: cookie.value
        }
    }).then((response) => {status = response}).catch((error) =>{
        status = error.response
    })

    return status
}