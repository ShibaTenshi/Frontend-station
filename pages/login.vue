<template>
    <Header :logo="true"/>
    <div class="box">
        <div class="logo">
            <img src="../assets/login.png" alt="" srcset="" class="loginImage">
            <h4>Log-In</h4>
        </div>
        <div class="field">
            <ul>
                <div class="textField">
                    <p>Username</p>
                    <li><input type="text" name="usernameField" id="usernameField"></li>
                </div>
                <div class="textField">
                    <p>Password</p>
                    <li><input type="password" name="passwdField" id="passwdField" @keydown.enter="test"></li>
                </div>
            </ul>
            <button v-on:click="loginRequest" class="AcceptBt">Accept</button>
            <p class="signupLink">If you don’t have your account, Please click <NuxtLink to="/">Sign-Up</NuxtLink></p>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            username: null,
            password: null
        };
    },
    methods: {
        getUsernameField() { return document.querySelector("input[name=usernameField]").value },
        getPasswordField() { return  document.querySelector("input[name=passwdField]").value },

        islogin(){
            const cookie = useCookie('token')
            if (cookie.value != ""){
                navigateTo('/usrs')
            }
        },

        failMassage(){

        },
        clearPaswordField(){
            const field = document.getElementById("passwdField")
            this.password = null
            field.value = ""
        },
        validate(){
            const username = this.getUsernameField()
            const passwdField = this.getPasswordField()

            if (username !== "" && passwdField !== ""){
                return 1
            }
            return 0
        },
        loginRequest(){
            if (this.validate()){
                this.authentication()
                this.clearPaswordField()
            }
            else{
                this.clearPaswordField()
                alert("input must not empty")
            }
        },

        //main function
        async authentication(){
            const response = await useAuth(this.getUsernameField(), this.getPasswordField())
            if (response.status == 200){
                const cookie = useCookie('token')
                cookie.value = response.data
                this.password = null
                navigateTo('/usrs')
            }
            else{
                alert("username or password not correct")
            }
        },
    },
    mounted: function() {
        this.$nextTick(this.islogin())
    }
}
</script>


<style scoped src="@/assets/styles/login.css"></style>