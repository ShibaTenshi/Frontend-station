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
            const text = document.createElement("div")
            const image = document.createElement("img")
            const cardHeader = document.createElement("p")
            const info = document.createElement("p")
            const count = document.createElement("p")

            image.src = lamp
            image.style.width = "60px"


            cardHeader.innerHTML = "Normal Table"
            cardHeader.style.fontSize = "20px"
            cardHeader.style.fontWeight = "bold"

            info.innerHTML = "(For 1 - 2 customers)"
            info.style.color = "rgb(142,142,142)"
            info.style.marginTop = "5px"

            text.style.display = "flex"
            text.style.flexDirection = "column"
            text.style.margin = "0 10px 0 10px"
            text.append(cardHeader)
            text.append(info)

            count.innerHTML = "1"
            count.style.margin = "0 1rem 0 1rem"
            count.style.color = "white"
            count.style.fontSize = "20px"
            count.style.fontWeight = "bold"
            count.style.backgroundColor = "rgb(148,166,132)"
            count.style.padding = "1rem"
            count.style.borderRadius = "8px"

            card.className = "card"
            card.style.backgroundColor = "rgb(242,242,242)"
            card.style.width = "22rem"
            card.style.alignItems = "center"
            card.style.display = "flex"
            card.style.justifyContent = "space-evenly"
            card.style.margin = "1rem 1rem 2rem 1rem"
            card.append(image)
            card.append(text)
            card.append(count)

            table?.append(card)
        },
        generateTable(){
            for (let index = 0; index < 2; index++) {
                this.createCard()  
            }
        }
    },
    mounted: function() {
        this.$nextTick(this.generateTable)
    }
}
</script>
<style scoped src="@/assets/styles/tableAvalibility.css"></style>