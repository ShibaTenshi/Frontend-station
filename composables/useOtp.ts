export async function useOtp(refer:string, otp:string) {
    const axios = useNuxtApp().$axios
    const runtime = useRuntimeConfig()
    const api = runtime.public.API_URL + 'otp'

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