<template>
    <Header :logo="true" :login="true"></Header>
    <div class="wrapper">

        <div class="header">
            <p>OTP Verification</p>
        </div>
        <div class="email">
            <p>Enter the OTP send to email</p>
            <p class="show">{{ email }}</p>
        </div>

        <div class="input">
            <p class="refer">Refer code is {{ refer }}</p>
            <div>
                <!-- <div class="you">
                    <p>you OTP</p>
                </div> -->
                <input type="text" name="otpField" id="otpField">
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="submit">
            <button v-on:click="submit">VERIFY & REQUEST</button>
        </div>
    </div>
    <div class="footer2">
        <div class="back">
            <button >Back</button>
        </div>
    </div>
</template>

<script>
import { useOtp } from '~/composables/useOtp'

export default {
    data(){
        return{
            refer: null,
            email: null
        }
    },
    methods: {
        islogin(){
        const cookie = useCookie('token')
        if (cookie.value != ""){
          navigateTo('/usrs')
        }
      },
        setEmailSignup(){
            const buff = localStorage.getItem("h1")
            let form = JSON.parse(buff)
            this.email = form[1]

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
        this.$nextTick(this.setEmailSignup())
        this.$nextTick(this.setReferCode())
        this.$nextTick(this.islogin())
        this.$nextTick(this.checkHaveReferCode())
    }
}
</script>

<style scoped src="@/assets/styles/otp.css"></style>