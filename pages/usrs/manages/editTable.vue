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
                <div class="assign">
                    <button>Assign</button>
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
import { fetchNameProfile } from "~/utils/userAPI"
import { fetchDescriptionProfile } from "~/utils/userAPI"
import lamp from '@/assets/lamp.png'
export default {
    data(){
        return{
            restaurantName: "Restaurant Name",
            information: "Information"
        }
    },
    methods:{
        async fetchData(){
            const name:any = await fetchNameProfile(useCookie('token').value)
            this.restaurantName = name;

            const discription:any = await fetchDescriptionProfile(useCookie('token').value)
            this.information = discription;
        },
    },
    mounted: function() {
        this.$nextTick(this.fetchData)
    }
}
</script>
<style scoped src="@/assets/styles/editTable.css"></style>