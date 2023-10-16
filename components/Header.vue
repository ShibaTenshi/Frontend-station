<template>
    <div>
        <Head>
            <Title>ShibaStation</Title>
        </Head>
        <div class="header">
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/usrs" v-if="logo">LOGO</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/login" v-if="login">Login</NuxtLink>
                    </li>
                    <li>
                        <button v-if="logout" v-on:click="islogout">Logout</button>
                    </li>
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
    logout: Boolean
    
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
    .header nav ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        list-style: none;
        background-color: rgb(148, 166, 132);
    }

    NextLink{
        text-decoration: none;
    }
</style>