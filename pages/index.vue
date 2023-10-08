<template>
    <div class="signUpBox">
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


            validate(){
                //test
            },

            async signupForm(){
                try {
                    this.queryForm()
                    this.validate()
                    const signupForm = () => {useSignUpForm(this.name, this.email, this.username)} //Api
                    try {
                        signupForm()
                    } catch (e) {
                        console.log(e)
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