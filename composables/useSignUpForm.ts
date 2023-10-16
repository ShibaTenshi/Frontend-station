export const useSignUpForm = async (nameForm:string, emailF:string, usernameF:string, restaurantNameF:string, typeF:string, descriptionF:string, locationF:string, imageF:string) => {
    //console.log(name, email, username, restaurantName, type ,description, location ,image)

    const axios = useNuxtApp().$axios;
    const api = 'http://10.147.17.139:5041/register/restaurant';

    const data = await axios.post(api, {
        fullName: nameForm,
        email: emailF,
        username: usernameF,
        restaurantName: restaurantNameF,
        category: typeF,
        description: descriptionF,
        location: locationF,
        image: imageF
    },{
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    })

    return data
}