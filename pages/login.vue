<template>
    <Header :logo="true"/>

    <div class="wrapper">
        <div class="box">
            <div class="logo">
                <img src="../assets/login.png" alt="" srcset="" class="loginImage">
                <p>Log-In</p>
            </div>
            <div class="field">
                <ul>
                    <div class="textField">
                        <p>Username</p>
                        <li><input type="text" name="usernameField" id="usernameField"></li>
                    </div>
                    <p class="error" id="p1">{{ usernameError }}</p>
                    <div class="textField">
                        <p>Password</p>
                        <li><input type="password" name="passwdField" id="passwdField" @keydown.enter="loginRequest"></li>
                    </div>
                    <p class="error" id="p2">{{ passwordError }}</p>
                </ul>
                <div class="btn">
                    <button v-on:click="loginRequest" class="AcceptBt">Accept</button>
                </div>
                <div class="footer">
                    <p class="signupLink">If you don’t have your account, Please click</p>
                    <NuxtLink to="/" style="background-color: white;">Sign-Up</NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
    data() {
        return {
            username: null,
            password: null,
            usernameError: "",
            passwordError: "",
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
                this.usernameError = ""
            }
            else{
                this.clearPaswordField()
                //alert("input must not empty")
                if (this.getUsernameField() == ""){
                    document.getElementById("p1").style.color = "tomato"
                    document.getElementById("usernameField").style.borderColor = "tomato"
                    this.usernameError = "Request username"
                }
                if (this.getPasswordField() == ""){
                    document.getElementById("p2").style.color = "tomato"
                    document.getElementById("passwdField").style.borderColor = "tomato"
                    this.passwordError = "Request password"
                }
            }
        },

        //main function
        async authentication(){
            document.getElementById("usernameField").style.borderColor = "black"
            document.getElementById("passwdField").style.borderColor = "black"
            this.usernameError = ""
            this.passwordError = ""
            const response = await useAuth(this.getUsernameField(), this.getPasswordField())
            const pattern = /Error:/g
            const data = response.data
            if (!data.match(pattern)){
                const cookie = useCookie('token')
                cookie.value = response.data
                this.password = null
                navigateTo('/usrs')
            }
            else{
                //alert(response.data)
                const word =response.data
                //alert(word.includes('User'))
                if (word.includes("User")){
                    document.getElementById("usernameField").style.borderColor = "tomato"
                    document.getElementById("p1").style.color = "tomato"
                    this.usernameError = word.substring(6)
                }
                if (word.includes("Password")){
                    document.getElementById("passwdField").style.borderColor = "tomato"
                    document.getElementById("p2").style.color = "tomato"
                    this.passwordError = word.substring(6)
                }
            }
            // if (response.status == 200){
            //     const cookie = useCookie('token')
            //     cookie.value = response.data
            //     this.password = null
            //     //navigateTo('/usrs')
            // }
            // else{
            //     alert("username or password not correct")
            // }
        },
    },
    mounted: function() {
        this.$nextTick(this.islogin())
    }
}
</script>


<style scoped src="@/assets/styles/login.css"></style>