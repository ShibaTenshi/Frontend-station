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
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const goBack = () => navigateTo("/usrs/manages/tableAvalibility")
</script>



<script lang="ts">
import { fetchDescriptionProfile } from "~/utils/userAPI"
import { editTable } from "~/utils/userAPI"
import lamp from '@/assets/lamp.png'
export default {
    data(){
        return{
            restaurantName: "",
            information: ""
        }
    },
    methods:{
        async fetchData(){

            const discription:any = await fetchDescriptionProfile(useCookie('token').value)
            this.restaurantName = discription.restaurantName
            this.information = discription.description;
        },
        async createCard(name:string, countNumber:string, id:string) {

        const table = document.getElementById("table")

        const card = document.createElement("div")
        const text = document.createElement("div")
        const image = document.createElement("img")
        const cardHeader = document.createElement("p")
        const count = document.createElement("p")
        const deBtn = document.createElement("button")
        const inBtn = document.createElement("button")

        image.src = lamp
        image.style.width = "60px"


        cardHeader.innerHTML = name
        cardHeader.style.fontSize = "16px"
        cardHeader.style.fontWeight = "bold"


        text.style.display = "flex"
        text.style.flexDirection = "column"
        text.style.margin = "0 10px 0 10px"
        text.append(cardHeader)

        count.innerHTML = countNumber
        count.id = "number"+ id
        count.style.margin = "0 1rem 0 1rem"
        count.style.color = "white"
        count.style.fontSize = "18px"
        count.style.fontWeight = "bold"
        count.style.backgroundColor = "rgb(148,166,132)"
        count.style.padding = "1rem"
        count.style.borderRadius = "8px"

        //decrese button
        deBtn.style.backgroundColor = "white"
        deBtn.style.cursor = "pointer"
        deBtn.innerHTML = "-"
        deBtn.style.fontSize = "30px"
        deBtn.style.width = "4rem"
        deBtn.style.height = "3rem"
        deBtn.style.borderRadius = "8px"
        deBtn.style.backgroundColor = "white"
        deBtn.addEventListener('click',()=>{
            let size:any = document.getElementById(count.id)?.textContent
            if (size > 0){
                let numTable = (Number(size) - 1)
                count.innerHTML = numTable.toString()
                editTable(useCookie('token').value,id ,numTable.toString())
                const massage:any = document.getElementById("massageShow")

            }
        })

        //incrase button
        inBtn.style.backgroundColor = "white"
        inBtn.innerHTML = "+"
        inBtn.style.fontSize = "20px"
        inBtn.style.cursor = "pointer"
        inBtn.style.width = "4rem"
        inBtn.style.height = "3rem"
        inBtn.style.borderRadius = "8px"
        inBtn.addEventListener('click',()=>{
            let size:any = document.getElementById(count.id)?.textContent
            if (size >= 0){
                let numTable = (Number(size) + 1)
                count.innerHTML = numTable.toString()
                editTable(useCookie('token').value,id ,numTable.toString())
            }
        })

        card.className = "card"
        card.id = id
        card.style.backgroundColor = "rgb(242,242,242)"
        card.style.width = "22rem"
        card.style.alignItems = "center"
        card.style.display = "flex"
        card.style.justifyContent = "space-evenly"
        card.style.margin = "1rem 1rem 2rem 1rem"
        card.append(image)
        card.append(text)
        card.append(deBtn)
        card.append(count)
        card.append(inBtn)

        table?.append(card)
        },
        async generateTable(){
            const tableRespone:any = await fetchTableType(useCookie("token").value)


            for (let index = 0; index < tableRespone.length; index++) {
                this.createCard("Table size " + tableRespone[index].numSeat + " Seats.", tableRespone[index].numTable, tableRespone[index].numSeat)  
            }
        }
    },
    mounted: function() {
        this.$nextTick(this.fetchData)
        this.$nextTick(this.generateTable)
    }
}
</script>
<style scoped src="@/assets/styles/editTable.css"></style>