<template>
    <h1>page2 {{ name }}</h1>
    <button v-on:click="show()">ddd</button>
</template>

<script>
import index from './index.vue';
    export default{
        data(){
            return{
                name: null
            }
        },
        methods:{
            show(){
                let buff = localStorage.getItem("h1")
                let arry = JSON.parse(buff)
                console.log(arry)
            }
        }
    }
</script>