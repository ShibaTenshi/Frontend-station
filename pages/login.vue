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
            <button v-on:click="testAuth()" class="AcceptBt">Accept</button>
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
        getUsernameField() {
            const user = document.querySelector("input[name=usernameField]").value;
            this.username = user;
        },
        getPasswordField() {
            const passwd = document.querySelector("input[name=passwdField]").value;
            this.password = passwd;
        },
        testAuth() {
            this.getUsernameField();
            this.getPasswordField();
            const data = () => { useAuth(this.username, this.password); };
            data();
        }
    },
}
</script>


<style scoped src="@/assets/styles/login.css"></style>