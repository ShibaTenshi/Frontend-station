<template>
    <div>
        <Head>
            <Title>ShibaStation</Title>
        </Head>
        <div class="header">
            <nav>
                <ul>
                    <div class="head">
                        <li class="logo">
                            <img class="imageLogo" src="../assets/RestaurantLogo.png" alt="" style="background: transparent;">
                            <NuxtLink to="/usrs" v-if="logo" class="namelogo" style="color: white;">ShibaStation</NuxtLink>
                        </li>
                        <li class="home">
                            <NuxtLink to="/usrs" v-if="home" style="color: white; text-decoration: none; background-color: transparent;">Home</NuxtLink>
                        </li>
                    </div>
                    <div class="menu">
                        <li>
                        <NuxtLink to="/login" v-if="login" class="menulogin" style="color: white;">Login</NuxtLink>
                        </li>
                        <li>
                        <button v-if="logout" v-on:click="islogout" class="logoutButton" style="color: white;">Logout</button>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>
  defineProps({
    logo: Boolean,
    signupBtn: Boolean,
    login: Boolean,
    logout: Boolean,
    home: Boolean
    
  })
  
  async function islogout(){
    const status = await useIsLogin()
    const cookie = useCookie('token')
    if (status == 200){
        const axios = useNuxtApp().$axios;
        const api = 'http://localhost:5041/auth/logout';

        await axios.post(api,null ,{params: {
            token: cookie.value
        }
    },
    {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then((response) => response)
    }
    cookie.value = ''
    navigateTo('/login')
  }
</script>


<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 20px;
    }
    
    .header nav ul{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        list-style: none;
        background-color: rgb(148, 166, 132);
    }

    /*logo*/
    .head {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px;
        background-color: transparent;
    }
    .head li{
        margin-left: 45px;
    }
    .head .home{
        background-color: transparent;
    }
    ul .head .logo{
        display: flex;
        align-items: center;
        margin-left: 1px;
    }
    .head .logo .imageLogo{
        width: 40px;
        margin-bottom: 10px;
    }
    .head .logo {
        background-color: transparent;
       
    }
    .head .namelogo{
        margin-left: 1px;
        background-color: transparent;
        text-decoration: none;
        color: black;
    }

    /*menu*/
    .header nav ul .menu{
        display: flex;
        justify-content: right;
        background-color: transparent;
    }
    .menu li {
        margin-right: 1px;
        background-color: transparent;
    }
    .menulogin{
        background-color: transparent; 
        text-decoration: none;
        color: black;
        transition: 0.35s ease-in-out;
    }
    .menulogin:hover{
        color: rgb(58, 73, 44);
        transition: 0.35s ease-in;
    }


    /* logoutbutton */
    .logoutButton{ 
        background-color: transparent;
        transition: 0.35s;
        cursor: pointer;
    }
    .logoutButton:hover{
        color: rgb(58, 73, 44);
        transition: 0.35s;
        cursor: pointer;
    }
</style>