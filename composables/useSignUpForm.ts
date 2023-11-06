export const useSignUpForm = async (nameForm:string, emailF:string, usernameF:string, restaurantNameF:string, typeF:string, descriptionF:string, locationF:string, imageLogoF:string, imageMenuF:string, mapLinkF:string ,openDateF:string, closeTimeF:string, openTimeF:string) => {

    const axios = useNuxtApp().$axios;
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'register/restaurant'

    const data = await axios.post(api, {
        ownerName: nameForm,
        email: emailF,
        username: usernameF,
        restaurantName: restaurantNameF,
        category: typeF,
        description: descriptionF,
        location: locationF,
        imagelink: imageLogoF,
        menulink: imageMenuF,
        openTime: openTimeF,
        closeTime: closeTimeF,
        mapLink: mapLinkF,
        openDate: openDateF,
    },{
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    ).then((response) => {
        //console.log(response.data)
        return response.data
    }).catch((error) => {
        return error.data;
    })

    return data
}