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
            <div class="header">
                <div><p>Change Password</p></div>
            </div>

            <div class="field">
                <div>
                    <p>Original Password</p>
                    <input type="password" id="oldPassword">
                    <div class="error">
                        <p id="error_old">Incorrect Password</p>
                    </div>
                </div>
                <div>
                    <p>New Password</p>
                    <input type="password" id="newPassword">
                    <div class="error">
                        <p id="error_new">Incorrect Password</p>
                    </div>
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="password" id="confirmNewPassword" @keydown.enter="requestChangePassword">
                </div>
            </div>

            <div class="footer">
                <div class="back">
                    <button v-on:click="goBack">Back</button>
                </div>
                <div class="accept">
                    <button v-on:click="requestChangePassword">Accept</button>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup lang="ts">
import { fetchLogoImage } from "~/utils/userAPI"
import { fetchManageProfile } from "~/utils/userAPI"
import { changePassword } from "~/utils/userAPI"
import { useUserStore } from "@/stores/userStore"

const store:any = useUserStore()
store.token = useCookie('token').value

definePageMeta({
        middleware: 'auth'
    })

const goBack = () => navigateTo("/usrs")
async function getLogo() {
    const runtime = useRuntimeConfig()
    const api = runtime.public.STORAGE_URL
    const path = await fetchLogoImage("earth11")
    return api + path
}

const getErrorOldPassword = () => {return document.getElementById("error_old")}
const getErrorNewPassword = () => {return document.getElementById("error_new")}
const getOldPassword = () => {return document.getElementById("oldPassword")}
const getNewPassword = () => {return document.getElementById("newPassword")}
const getConfirmNewPassword = () => {return document.getElementById("confirmNewPassword")}

async function requestChangePassword(){
    let status:number = 3
    let old:any = getOldPassword()
    let newPass:any = getNewPassword()
    let confirmNewPass:any = getConfirmNewPassword()
    const pattern = /Error: Password Mismatch/g

    let errorOld:any = getErrorOldPassword()
    errorOld.style.display = "none"
    let errorNew:any = getErrorNewPassword()
    errorNew.style.display = "none"

    old.style.borderColor = "rgb(202,202,202)"
    newPass.style.borderColor = "rgb(202,202,202)"
    confirmNewPass.style.borderColor = "rgb(202,202,202)"



    if (old.value.length == 0){
        old.style.borderColor = "tomato"
        errorOld.style.display = "inline"
        errorOld.innerHTML = "Please enter your old password."
        --status
    }
    if (newPass.value.length == 0 || confirmNewPass.value.length == 0){
        newPass.style.borderColor = "tomato"
        confirmNewPass.style.borderColor = "tomato"
        errorNew.style.display = "inline"
        errorNew.innerHTML = "Please enter a new password."
        --status
    }
    if (newPass.value != confirmNewPass.value){
        newPass.style.borderColor = "tomato"
        confirmNewPass.style.borderColor = "tomato"
        errorNew.style.display = "inline"
        errorNew.innerHTML = "New password doesn't match."
        --status
    }

    if (status == 3){
        const data = await changePassword(store.token,old.value,confirmNewPass.value)
        if (data.match(pattern) != null){
            old.style.borderColor = "tomato"
            errorOld.style.display = "inline"
            errorOld.innerHTML = "Password Mismatch."
            --status
        }else{
            alert("Password changed successfully")
            old.value = ""
            newPass.value = ""
            confirmNewPass.value = ""
            old.style.borderColor = "rgb(202,202,202)"
            newPass.style.borderColor = "rgb(202,202,202)"
            confirmNewPass.style.borderColor = "rgb(202,202,202)"

            errorOld.style.display = "none"
            errorNew.style.display = "none"
        }
    }
}

const request:any = await fetchManageProfile(useCookie('token').value)
let name:string [] = request.ownerName.split(" ",request.ownerName.length)

store.email = request.email
store.firstName = name[0]
store.lastNmae = name[1]
store.restaurantName = request.restaurantName
store.username = request.username


const logoImage:string = await getLogo()

let firstName = store.firstName
let lastname = store.lastNmae
let username = store.username
let email = store.email
let restaurant = store.restaurantName




</script>
<style scoped src="@/assets/styles/manageProfile.css"></style>