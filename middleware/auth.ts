import { useIsLogin } from "~/composables/useIsLogin"

export default defineNuxtRouteMiddleware(async (to,from) => {
    const status = await useIsLogin()
    if (status !== 200){
        return navigateTo('/login')
     }   
})