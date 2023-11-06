export const getType = async () => {
    const axios = useNuxtApp().$axios
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'content/category'
    const data = await axios.get(api).then((response) => {
        return response.data
    })
    return data
}