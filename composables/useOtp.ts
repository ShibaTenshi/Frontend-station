export async function useOtp(refer:string, otp:string) {
    const axios = useNuxtApp().$axios
    const api = 'http://10.147.17.253:5041/otp'

    const data = await axios.post(api,null ,{
        params:{
            refer: refer,
            otpNumber: otp
        }
    }
    ).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    })

    return data;
    
}