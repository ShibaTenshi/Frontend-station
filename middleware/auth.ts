import { useIsLogin } from "~/composables/useIsLogin"
import { useUserStore } from "@/stores/userStore"

export default defineNuxtRouteMiddleware(async (to,from) => {
    const store = useUserStore()
    const response:any = await useIsLogin()

    const pattern = /Error:/g
    const data = response.data
    if (data.match(pattern)){
        console.log("error")
        const cookie = useCookie('token')
        cookie.value = ""
        store.token = ""
        return navigateTo('/login')
    }
})