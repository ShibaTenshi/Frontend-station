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
        getOtpField(){ return document.querySelector("input[name=otpField]").value},
        setReferCode(){
            const referCode = localStorage.getItem("refer")
            this.refer = referCode
        },
        submit(){
            console.log(this.getOtpField())
            const request = async () => {
                await useOtp(this.refer,this.getOtpField())
            }
        request()
        }
    },
    mounted: function(){
        this.$nextTick(this.setReferCode())
        //this.$nextTick(navigateTo('/authentication'))
    }
}
</script>

<style scoped src="@/assets/styles/otp.css"></style>