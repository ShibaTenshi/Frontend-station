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
                    <button v-on:click="goAssign">Edit</button>
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
    const goAssign = () => navigateTo("/usrs/manages/editTable")
</script>



<script lang="ts">
import { fetchTableType } from "~/utils/userAPI"
import { fetchDescriptionProfile } from "~/utils/userAPI"
import { useUserStore } from "@/stores/userStore"
import lamp from '@/assets/lamp.png'

export default {
    data(){
        return{
            restaurantName: "Restaurant Name",
            information:"Information"
        }
    },
    methods:{
        async fetchInformation(){
            const store = useUserStore()
            const discription:any = await fetchDescriptionProfile(useCookie("token").value)
            this.information = discription.description;
            this.restaurantName = discription.restaurantName
        },
        async createCard(name:string, countNumber:string) {

            const table = document.getElementById("table")

            const card = document.createElement("div")
            const text = document.createElement("div")
            const image = document.createElement("img")
            const cardHeader = document.createElement("p")
            const count = document.createElement("p")

            image.src = lamp
            image.style.width = "60px"


            cardHeader.innerHTML = name
            cardHeader.style.fontSize = "20px"
            cardHeader.style.fontWeight = "bold"


            text.style.display = "flex"
            text.style.flexDirection = "column"
            text.style.margin = "0 10px 0 10px"
            text.append(cardHeader)
            //text.append(info)

            count.innerHTML = countNumber
            count.style.margin = "0 1rem 0 1rem"
            count.style.color = "white"
            count.style.fontSize = "18px"
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
        async generateTable(){
            const tableRespone:any = await fetchTableType(useCookie("token").value)


            for (let index = 0; index < tableRespone.length; index++) {
                this.createCard("Table size " + tableRespone[index].numSeat + " Seats.", tableRespone[index].numTable)  
            }
        }
    },
    mounted: function() {
        this.$nextTick(this.generateTable)
        this.$nextTick(this.fetchInformation)
    }
}
</script>
<style scoped src="@/assets/styles/tableAvalibility.css"></style>