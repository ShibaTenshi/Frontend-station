export async function fetchLogoImage(username:string){
    const axios = useNuxtApp().$axios;
    const api = 'http://10.147.17.253:5034/restaurant/image/logo/' + username;

    const data = await axios.get(api
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    })

    return data;
}