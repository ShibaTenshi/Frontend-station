<template>
    <Header :logo="true" :logout="true" :home="true"/>

    <div class="wrapper">
        <div class="main">
            <div class="header">
                <p>Restarurant information</p>
            </div>
            <div class="image">
                <img src="@/assets/ResPic.png" alt="">
            </div>
            <div class="name">
                <div class="resName">
                    <p>Restarurant Name</p>
                </div>
                <p>Restarurant Description</p>
            </div>

            <div class="type">
                <div>
                    <p>Restarurant Type</p>
                    <img src="@/assets/pngwing2.png" alt="">
                </div>
                <p>Restarurant Type</p>
            </div>

            <div class="location">
                <div>
                    <p>Location</p>
                    <img src="@/assets/pngwing2.png" alt="">
                </div>
                <p>Location</p>
            </div>

            <div class="time">
                <div>
                    <p>Time</p>
                    <img src="@/assets/pngwing2.png" alt="">
                </div>
                <p>time</p>
            </div>

            <div class="footer">
                <button v-on:click="goBack">Accpet</button>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

</script>


<script lang="ts">
export default {
    data(){
        return{
            restaurantName: null,
            location: null,
            time: null
        }
    },
    methods:{
        goBack(){navigateTo("/usrs")}
    }
}
</script>

<style scoped src="@/assets/styles/information.css"></style>