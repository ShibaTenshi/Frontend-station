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
                    <p>{{ restaurantName }}</p>
                </div>
                <p>{{ restaurantDiscription }}</p>
            </div>

            <div class="type">
                <div>
                    <p>Restarurant Type</p>
                    <img src="@/assets/pngwing2.png" alt="">
                </div>
                <p>{{ restaurantType }}</p>
            </div>

            <div class="location">
                <div>
                    <p>Location</p>
                    <img src="@/assets/pngwing2.png" alt="">
                </div>
                <p>{{ location }}</p>
            </div>

            <div class="time">
                <div>
                    <p>Time</p>
                    <img src="@/assets/pngwing2.png" alt="">
                </div>
                <p>{{ time }}</p>
            </div>

            <div class="footer">
                <button v-on:click="goBack">Back</button>
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
import { fetchDescriptionProfile } from "~/utils/userAPI"
import { timeFormat } from "~/utils/timeFormat";

export default {
    data(){
        return{
            restaurantName: "",
            restaurantDiscription: "",
            restaurantType: "",
            location: "",
            time: "",
        }
    },
    methods:{
        goBack(){navigateTo("/usrs")},
        async fetchData(){
            const discription:any = await fetchDescriptionProfile(useCookie('token').value)
            this.restaurantName = discription.restaurantName

            this.restaurantDiscription = discription.description

            this.restaurantType = discription.category

            this.location = discription.location

            this.time = this.setTime(discription.openDate,discription.openTime,discription.closeTime)
        },
        setTime(openDate:string, openTime:string, closeTime:string){
            return timeFormat(openDate, openTime ,closeTime)
        },

        setInformation(){  
            this.time = this.setTime("1101011","13:59","20:00")
        }
    },
    mounted: function () {
        this.$nextTick(this.fetchData)
    }
}
</script>

<style scoped src="@/assets/styles/information.css"></style>