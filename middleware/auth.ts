import { useIsLogin } from "~/composables/useIsLogin"

export default defineNuxtRouteMiddleware(async (to,from) => {
    const response:any = await useIsLogin()

    const pattern = /Error:/g
    const data = response.data
    if (data.match(pattern)){
        console.log("error")
        const cookie = useCookie('token')
        cookie.value = ''
        return navigateTo('/login')
    }
})