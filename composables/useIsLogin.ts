export async function useIsLogin() {
    const axios = useNuxtApp().$axios;
    const api = 'http://localhost:5041/token';

    const cookie = useCookie('token')
    let status


    await axios.get(api, {
        params: {
            token: cookie.value
        }
    }).then((response) => {status = response.status}).catch((error) =>{
        status = error.response.status
    })

    return status
}