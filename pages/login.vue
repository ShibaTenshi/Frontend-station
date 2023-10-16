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
                    <li><input type="password" name="passwdField" id="passwdField"></li>
                </div>
            </ul>
            <button v-on:click="loginRequest" class="AcceptBt">Accept</button>
            <p class="signupLink">If you don’t have your account, Please click <NuxtLink to="/">Sign-Up</NuxtLink></p>
        </div>
    </div>
</template>

<script>
    export default{
    data() {
        return {
            username: null,
            password: null
        };
    },
    methods: {
        getUsernameField() { return document.querySelector("input[name=usernameField]").value },
        getPasswordField() { return  document.querySelector("input[name=passwdField]").value },

        failMassage(){

        },
        clearPaswordField(){
            const field = document.getElementById("passwdField")
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

        //main function
        async authentication(){
            const response = await useAuth(this.getUsernameField(), this.getPasswordField())
            if (response.status == "FAILED"){
                alert(response.value)
                //do something
            }
        },
        loginRequest(){
            if (this.validate()){
                this.authentication()
                this.clearPaswordField()
            }
            else{
                this.clearPaswordField()
                //do some thing.
            }
        }
    }
}
</script>


<style scoped src="@/assets/styles/login.css"></style>