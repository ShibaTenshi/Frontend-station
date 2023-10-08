<template>
    <div class="signUpBox" id="signUpBox1">
        <div class="logo">
            <img src="@/assets/login.png" alt="">
            <div class="signup">
                <p>Sign-Up</p>
                <p>as Restaurant</p>
            </div>
        </div>
        <div class="form">
            <ul>
                <li>
                    <p>Firstname Lastname</p>
                    <input type="text" name="nameField" id="nameField">
                </li>
                <li>
                    <p>Email</p>
                    <input type="text" name="emailField" id="emailField">
                </li>
                <li>
                    <p>username</p>
                    <input type="text" name="usernameField" id="usernameField">
                </li>
            </ul>
            <div class="enter">
                <button v-on:click="signupForm()"><p>Next</p></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                name: null,
                email: null,
                username: null
            }
        },
        methods:{
            getFirstNameField(){
                const name = document.querySelector("input[name=nameField]").value
                return name
            },
            getEmailField(){
                const email = document.querySelector("input[name=emailField]").value
                return email
            },
            getUsernameField(){
                const username = document.querySelector("input[name=usernameField]").value
                return username
            },


            queryForm(){
                this.name = this.getFirstNameField()
                this.email = this.getEmailField()
                this.username = this.getUsernameField()
            },
            clearForm(){
                const name = document.getElementById("nameField");
                name.value = ""
                this.name = null

                const email = document.getElementById("emailField");
                email.value = ""
                this.email = null

                const username = document.getElementById("usernameField");
                username.value = ""
                this.username = null
            },

            validateForm(){
                let status = 0;
                const name = this.getFirstNameField();
                const email = this.getEmailField();
                const username = this.getUsernameField();

                if (checkEmail(email) == 0 && email !== ""){
                    status = 0
                    alert("email in valid")
                }

                if (name === "" || email === "" || username === ""){
                    status = 0
                }

                if (name !== "" && checkEmail(email) && username !== ""){
                    this.name = name
                    this.email = email
                    this.username = username;
                    status = 1
                }

                const signupForm = [this.name, this.email, this.username]
                let buff = JSON.stringify(signupForm)
                localStorage.setItem("h1",buff)

                return status
            },
            async signupForm(){
                try {
                    this.queryForm()
                    if (this.validateForm()){
                        //gotoPage2()
                        location.replace("/2");
                    }
                } catch (e) {
                    console.log(e)
                }
                finally{
                    this.clearForm()
                }
            }
        }
    }
</script>



<style scoped src="@/assets/styles/signup.css">
</style>