<template>
    <h1>login</h1>
    username<input type="text" name="usernameFied">
    <br>
    password<input type="text" name="passwdFied">
    <br>
    <button v-on:click="getUsernameFied(),getPasswordFied()">Enter</button>

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
            getUsernameFied(){
                const username = document.querySelector("input[name=usernameFied]").value
                this.username = username
            },
            getPasswordFied(){
                const passwd = document.querySelector("input[name=passwdFied]").value
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
        background-color: tomato;
        transition: 0.35s;
        padding: 10px 10px;
    }

    button:hover {
        background-color: red;
        transition: 0.35s;
    }
</style>