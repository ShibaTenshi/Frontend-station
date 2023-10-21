<template>
    <Header :logo="true" :logout="true" :home="true"/>
    <h1>Manages</h1>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })

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