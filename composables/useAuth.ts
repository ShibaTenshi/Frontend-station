export const useAuth = async (usr:string, pass:string) => {
    const axios = useNuxtApp().$axios
    const api = 'http://10.147.17.139:8080/login/customer' // test with customer

    axios.post(api, {
        username: usr,
        password: pass
    },{
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}