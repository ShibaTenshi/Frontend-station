export async function useIsLogin() {
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'token'

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