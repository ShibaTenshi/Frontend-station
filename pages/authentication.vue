<template>
    <Header :logo="true" :login="true"></Header>
    <div>
        <h2>OTP</h2>

        <div class="input">
            <p>you refer code is {{ refer }}</p>
            <div>
                <p>you OTP</p>
                <input type="text" name="otpField" id="otpField">
            </div>
            <button v-on:click="submit">Submit</button>
        </div>
    </div>
</template>

<script>
import { useOtp } from '~/composables/useOtp'

export default {
    data(){
        return{
            refer: null
        }
    },
    methods: {
        islogin(){
        const cookie = useCookie('token')
        if (cookie.value != ""){
          navigateTo('/usrs')
        }
      },
        getOtpField(){ return document.querySelector("input[name=otpField]").value},
        setReferCode(){
            const referCode = localStorage.getItem("refer")
            this.refer = referCode
        },
        checkHaveReferCode(){
            const referCode = localStorage.getItem("refer")
            if (referCode == ""){
                navigateTo('/3')
            }
        },
        submit(){
            console.log(this.getOtpField())
            const request = async () => {
                const data = await useOtp(this.refer,this.getOtpField())
                //alert(data.data)

                if (data.data == ""){
                    localStorage.removeItem('h1')
                    alert("Request Signup Successful")
                    setTimeout(await navigateTo('/signupRecive'), 500)
                }
                else{
                    alert(data.data)
                }
            }
            request()
        }
    },
    mounted: function(){
        this.$nextTick(this.setReferCode())
        this.$nextTick(this.islogin())
        this.$nextTick(this.checkHaveReferCode())
    }
}
</script>

<style scoped src="@/assets/styles/otp.css"></style>