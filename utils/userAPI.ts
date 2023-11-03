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


export async function fetchManageProfile(tokenId:unknown){
    const axios = useNuxtApp().$axios;
    const api = 'http://localhost:5041/profile';

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
    const api = 'http://localhost:5041/profile/changePassword';

    const data = await axios.post(api, {
        tokenId: tokenId,
        oldPassword: oldPassword,
        newPassword: newPassword
    },{
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        return error.data;
    })

    return data;
}

export async function fetchNameProfile(tokenId:unknown){
    const axios = useNuxtApp().$axios;
    const api = 'http://localhost:5041/name';

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

export async function fetchDescriptionProfile(tokenId:unknown){
    const axios = useNuxtApp().$axios;
    const api = 'http://localhost:5041/description';

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