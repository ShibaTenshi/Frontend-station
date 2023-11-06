<template>
    <Header :logo="true" :logout="true" :home="true"/>

    <div class="wrapper">
        <div class="main">
            <div class="header">
                <div><p>Manage Queue</p></div>
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

            <div class="date">
                <div><p>{{ date }}</p></div>
            </div>

            <div class="table">
                <table id="table">
                    <colgroup>
                        <col class="c1">
                        <col class="c2">
                        <col class="c3">
                        <col class="c4">
                        <col class="c5">
                    </colgroup>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Table</th>
                    </tr>
                </table>
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

</script>



<script lang="ts">
import { fetchDescriptionProfile } from "~/utils/userAPI"
import { getTable } from "~/utils/userAPI"
export default {
    data(){
        return{
            restaurantName: "Restaurant Name",
            information:"Information",
            date: "NO Queue",
        }
    },
    methods:{
        goBack(){
            location.href = '/usrs';
        },
        async fetchData(){
            const discription:any = await fetchDescriptionProfile(useCookie('token').value)
            this.restaurantName = discription.restaurantName
            this.information = discription.description;

            const responeTable:any = await getTable(useCookie('token').value)
            if (responeTable.length != 0 ){
                for (let index = 0; index < responeTable.length; index++) {
                    const time = responeTable[index].dateTime.split(" ",responeTable.length)
                    this.date = time[0]

                    this.generateTable(time[0],responeTable[index].name,time[1],responeTable[index].seatNumber, responeTable.length)
                }
            }
        },
        async generateTable(tdate:string, tname:string, ttime:string, ttype:string, tableSize:number){
            
                let table: HTMLTableElement = <HTMLTableElement> document.getElementById("table");

                let date:HTMLElement = document.createElement('td')
                let name:any = document.createElement('td')
                let time:any = document.createElement('td')
                let type:any = document.createElement('td')

                let text_date:any = document.createElement('p')
                let text_name:any = document.createElement('p')
                let text_time:any = document.createElement('p')
                let text_type:any = document.createElement('p')

                text_date.style.textAlign = "center"
                text_date.style.margin = "10px 0 10px 0"

                text_name.style.textAlign = "center"
                text_name.style.margin = "10px 0 10px 0"

                text_time.style.textAlign = "center"
                text_time.style.margin = "10px 0 10px 0"

                text_type.style.textAlign = "center"
                text_type.style.margin = "10px 0 10px 0"

                text_date.innerHTML = tdate
                text_name.innerHTML = tname
                text_time.innerHTML = ttime
                text_type.innerHTML =  "Size " + ttype + " table"

                date.append(text_date)
                name.append(text_name)
                time.append(text_time)
                type.append(text_type)

                let tr = document.createElement('tr')
                tr.className = "content"
                tr.append(date)
                tr.append(name)
                tr.append(time)
                tr.append(type)

                table.append(tr)
        }
    },
    mounted: function() {
        this.$nextTick(this.fetchData)
    }
}
</script>
<style scoped src="@/assets/styles/queue.css"></style>