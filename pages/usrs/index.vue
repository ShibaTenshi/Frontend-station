<template>
    <Header :logo="true" :logout="true"/>

    <div class="content">
        <div class="layer1">
            <div class="profile" v-on:click="goToManages">
                <img src="@/assets/gear.png" alt="">
                <button style="cursor: pointer;">
                    <NuxtLink to="usrs/manages" style="text-decoration: none; color: black;"><p>Manage Profile</p></NuxtLink>
                </button>
            </div>
            <div class="avali" v-on:click="goToTableAvali">
                <img src="@/assets/dining-table.png" alt="">
                <button style="cursor: pointer;">
                    <NuxtLink to="usrs/manages/tableAvalibility" style="text-decoration: none; color: black;"><p>Manage Table Avalibility</p></NuxtLink>
                </button>
            </div>
        </div>

        <div class="layer2">
            <div class="queue" v-on:click="goToManageQuese">
                <img src="@/assets/calendar.png" alt="">
                <button style="cursor: pointer;">
                    <NuxtLink to="usrs/manages/queue" style="text-decoration: none; color: black;"><p>Manage Queue</p></NuxtLink>
                </button>
            </div>
            <div class="information" v-on:click="goToInformation">
                <img src="@/assets/about-us.png" alt="">
                <button style="cursor: pointer;">
                    <NuxtLink to="usrs/information" style="text-decoration: none; color: black;"><p>Restaurant Information</p></NuxtLink>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore"

const store = useUserStore()
store.token = useCookie('token').value

    definePageMeta({
        middleware: 'auth'
    })

</script>



<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goToManages(){
            navigateTo('usrs/manages')
        },
        goToTableAvali(){
            navigateTo('usrs/manages/tableAvalibility')
        },
        goToManageQuese(){
            navigateTo('usrs/manages/queue')
        },
        goToInformation(){
            navigateTo('usrs/information')
        }
    }
}
</script>
<style scoped src="@/assets/styles/usrs.css"></style>