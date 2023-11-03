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

            <div class="table" id="table">
                <table>
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
                        <th>Size</th>
                        <th>Table</th>
                    </tr>
                    <tr>
                        <td>01/01/2023</td>
                        <td>earthinwss...</td>
                        <td>10:00 AM</td>
                        <td>1</td>
                        <td>Normal</td>
                    </tr>
                    <tr>
                        <td>01/01/2023</td>
                        <td>name</td>
                        <td>10:00 AM</td>
                        <td>1</td>
                        <td>Big</td>
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

<script setup>
    definePageMeta({
        middleware: 'auth'
    })
    let restaurantName = "Restaurant Name"
    let information = "Restaurant information"
    let date = "01/01/2023 - 02/02/2023"

</script>



<script>
export default {
    data(){
        return{

        }
    },
    methods:{}
}
</script>
<style scoped src="@/assets/styles/queue.css"></style>