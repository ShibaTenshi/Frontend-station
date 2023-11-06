export async function fetchLogoImage(restaurantName:string){
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.STORAGE_URL + 'restaurant/image/logo/' + restaurantName;

    const data = await axios.get(api
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    })

    return data;
}


export async function fetchManageProfile(tokenId:unknown){
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'restaurant/profile'

    let data

    await axios.get(api, {
        params: {
            tokenId: tokenId
        }
    }).then((response) => {data = response.data}).catch((error) =>{
        data = error.response
    })

    return data;
}

export async function changePassword(tokenId:unknown,oldPassword:string,newPassword:string){
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'restaurant/profile/changePassword'


    let data

    await axios.post(api,null, {
        params: {
            tokenId: tokenId,
            oldPassword: oldPassword,
            newPassword: newPassword

        }
    }).then((response) => {data = response.data}).catch((error) =>{
        data = error.response
    })

    return data;
}


export async function fetchDescriptionProfile(tokenId:unknown){
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'content/restaurantInfo'

    let data

    await axios.get(api, {
        params: {
            tokenId: tokenId
        }
    }).then((response) => {data = response.data}).catch((error) =>{
        data = error.response
    })

    return data;
}

export async function fetchTableType(tokenId:unknown){
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'restaurant/tableType'

    let data

    await axios.get(api, {
        params: {
            tokenId: tokenId
        }
    }).then((response) => {data = response.data}).catch((error) =>{
        data = error.response
    })

    return data;
}

export async function editTable(tokenId:unknown, numSeat:string, numTable:string){
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'restaurant/tableType/set'

    let data

    await axios.post(api,null, {
        params: {
            tokenId: tokenId,
            numSeat: numSeat,
            numTable: numTable
        }
    }).then((response) => {data = response.data}).catch((error) =>{
        data = error.response
    })

    return data;
}

export async function getTable(tokenId:unknown){
    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'booking'

    let data

    await axios.get(api, {
        params: {
            tokenId: tokenId
        }
    }).then((response) => {data = response.data}).catch((error) =>{
        data = error.response
    })

    return data;
}