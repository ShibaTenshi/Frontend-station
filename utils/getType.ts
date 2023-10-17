export const getType = async () => {
    const axios = useNuxtApp().$axios
    const api = 'http://localhost:5041/content/category'

    const data = await axios.get(api).then((response) => {
        return response.data
    })
    return data
}