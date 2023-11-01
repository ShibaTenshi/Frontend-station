<template>
    <Header :logo="true" :logout="true" :home="true"/>
    <h1>Manages</h1>
    <img :src="logoImage" alt="Logo Restaurant">
</template>

<script setup lang="ts">
import { fetchLogoImage } from "~/utils/userAPI";

async function getLogo() {
    const path = await fetchLogoImage("earth1234")
    return "https://content-shibaqueue.doksakura.com" + path; 
}

let logoImage:string = await getLogo()





</script>