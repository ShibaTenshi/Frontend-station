<template>
    <Header :logo="true" :logout="true" :home="true"/>
    
    <div class="wrapper">
        <div class="main">
            <div class="header">
                <div><p>Manage Profile</p></div>
            </div>
            <div class="back">
                <img src="@/assets/ResPic.png" class="background" alt="" srcset="">
            </div>
            <div class="data">
                <div class="image">
                    <div class="circular">
                        <img :src="logoImage" alt="Logo Restaurant Image">
                    </div>
                </div>

                <div class="show">
                    <div class="field">
                        <div>
                            <p class="name">Firstname</p>
                            <div>
                                <p>{{ firstName }}</p>
                            </div>
                        </div>
                        <div>
                            <p class="name">Lastname</p>
                            <div>
                                <p>{{ lastname }}</p>
                            </div>
                        </div>
                        <div>
                            <p class="name">Username</p>
                            <div>
                                <p>{{ username }}</p>
                            </div>
                        </div>
                        <div>
                            <p class="name">Email</p>
                            <div>
                                <p>{{ email }}</p>
                            </div>
                        </div>
                        <div>
                            <p class="name">Restaurant</p>
                            <div>
                                <p>{{ restaurant }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pass">

        </div>
    </div>

</template>

<script setup lang="ts">
import { fetchLogoImage } from "~/utils/userAPI";
import { useUserStore } from "@/stores/userStore";

const store = useUserStore()

async function getLogo() {
    const path = await fetchLogoImage("earth1234")
    return "https://content-shibaqueue.doksakura.com" + path; 
}


let logoImage:string = await getLogo()
//let name = store.username

let firstName = "firstNameText"
let lastname = "lastnameText"
let username = "usernameText"
let email = "emailText"
let restaurant = "restaurantText"




</script>
<style scoped src="@/assets/styles/manageProfile.css"></style>