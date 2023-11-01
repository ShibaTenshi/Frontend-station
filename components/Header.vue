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
                            <button v-if="logo" class="namelogo" v-on:click="goHome">ShibaStation</button>
                        </li>
                        <li class="home">
                            <button v-if="home" class="menuhome" v-on:click="goHome">Home</button>
                        </li>
                    </div>

                    <div class="menu">
                        <li>
                            <button v-if="login" class="menulogin" v-on:click="goLogin">Login</button>
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
  function goHome(){navigateTo("/usrs")}
  function goLogin(){navigateTo("/login")}
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
<style scoped src="@/assets/styles/navigation.css"></style>