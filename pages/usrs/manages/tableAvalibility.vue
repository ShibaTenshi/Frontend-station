<template>
    <Header :logo="true" :logout="true" :home="true"/>
    
    <div class="wrapper">
        <div class="main">
            <div class="header">
                <div><p>Manage Table Availability</p></div>
            </div>

            <div class="back">
                <img src="@/assets/ResPic.png" class="background" alt="" srcset="">
            </div>
            <div class="data">
                <div class="header">
                    <div>
                        <p>{{ restaurantName }}</p>
                        <p class="info">{{ information }}</p>
                    </div>
                </div>
            </div>

            <div class="table" id="table">
                <!-- dynamic card -->
                <!-- <div class="card">
                    <img src="@/assets/lamp.png">
                    <p>Normal Table</p>
                    <p>for 1-2</p>
                    <p>1</p>
                </div> -->

            </div>

            <div class="footer">
                <div class="back">
                    <button v-on:click="goBack">Back</button>
                </div>
                <div class="edit">
                    <button>Edit</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const goBack = () => navigateTo("/usrs")

    let restaurantName= "Restaurant Name"
    let information= "Information"

</script>



<script lang="ts">
import lamp from '@/assets/lamp.png'
export default {
    data(){
        return{

        }
    },
    methods:{
        createCard() {
            const table = document.getElementById("table")
            const card = document.createElement("div")
            const image = document.createElement("img")
            const cardHeader = document.createElement("p")
            const info = document.createElement("p")


            card.append(image)
            table?.append(card)
        }
    },
    mounted: function() {
        this.$nextTick(this.createCard)
    }
}
</script>
<style scoped src="@/assets/styles/tableAvalibility.css"></style>