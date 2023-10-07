<template>

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
        data(){
            return{
                username: null,
                password: null
            }
        },
        methods:{
            getUsernameField(){
                const user = document.querySelector("input[name=usernameField]").value
                this.username = user

            },
            getPasswordField(){
                const passwd = document.querySelector("input[name=passwdField]").value
                this.password = passwd
            },

            testAuth(){
                this.getUsernameField()
                this.getPasswordField()
                const data = () => {useAuth(this.username, this.password)}
                data()
            }
        }
    }
</script>


<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: white;
    }
    li{
        list-style: none;
    }
    div .box{
        margin: auto;
        margin-top: 7rem;
        border: 2px solid rgb(177, 206, 1);
        justify-content: center;
        border-radius: 20px;
        width: 40%;
        box-shadow: 10px 10px rgb(226, 226, 226);
    }


    .logo{
        text-align: center;
        margin: 4rem;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo .loginImage{
        width: 3rem;
        margin-right: 15px;
    }
    .field{
        text-align: center;
    }
    .field ul li {
        margin-left: 10px;
    }
    .textField{
        display: flex;
        justify-content: center;
        margin-top: 2.5rem;
        margin-bottom: 2rem;
    }
    .textField p{
        font-size: 18px;
        margin-top: 3px;
    }
    .field ul li input{
        padding: 15px;
        font-size: 18px;
        background-color: white;
        width: 16rem;
        height: 1.8rem;
        border-radius: 3rem;
        border: 1px solid black;
        outline: none;
        transition: 0.35s;
    }
    .field ul li input:hover{
        transition: 0.35s;
        border-color: rgb(151, 151, 151);
    }


    .field .AcceptBt{
        font-weight: bold;
        font-size: 15px;
        background-color: rgb(148, 166, 132);
        transition: 0.35s;
        padding: 10px 30px;
        border-radius: 10px;
        margin-left: 14rem;
        margin-top: 5px;
        margin-bottom: 5rem;
    }
    .AcceptBt:hover {
        background-color: rgb(121, 142, 102);
        transition: 0.35s;
        padding: 10px 33px;
    }

    
    .signupLink{
        text-align: center;
        font-size: 14px;
        margin: 20px;
    }
</style>