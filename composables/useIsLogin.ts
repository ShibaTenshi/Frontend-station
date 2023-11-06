import { useUserStore } from "@/stores/userStore"
export async function useIsLogin() {
    const store = useUserStore()
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'token'

    const cookie = useCookie('token')
    //const cookie = store.token
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