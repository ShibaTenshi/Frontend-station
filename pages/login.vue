<template>
    <h1>login</h1>

    <div class="box">
        <div class="logo">

        </div>
        <div class="field">
            <ul>
                <li>Username <input type="text" name="usernameField"></li>
                <li>Password<input type="text" name="passwdField"></li>
            </ul>
            <button v-on:click="getUsernameField(),getPasswordField()">Accept</button>
            <p>If you don’t have your account, Please click <NuxtLink to="/">Sign-Up</NuxtLink></p>
        </div>
    </div>

    <br><br>
    <h3>username is : {{username}}</h3>
    <br>
    <h3>password is : {{password}}</h3>
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
                const username = document.querySelector("input[name=usernameField]").value
                this.username = username
            },
            getPasswordField(){
                const passwd = document.querySelector("input[name=passwdField]").value
                this.password = passwd
            }
        }
    }
</script>


<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: whitesmoke;
    }
    input{
        background-color: gainsboro;
    }
    button {
        background-color: rgb(148, 166, 132);
        transition: 0.35s;
        padding: 10px 10px;
    }

    button:hover {
        background-color: rgb(121, 142, 102);
        transition: 0.35s;
    }
</style>