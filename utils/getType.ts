export const getType = async () => {
    const axios = useNuxtApp().$axios
    const api = 'http://10.147.17.253/content/category'

    const data = await axios.get(api).then((response) => {
        return response.data
    })
    return data
}