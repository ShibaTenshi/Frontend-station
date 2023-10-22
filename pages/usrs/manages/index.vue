<template>
    <Header :logo="true" :logout="true" :home="true"/>
    <h1>Manages</h1>
    <input type="file" class="imageLogo" id="imageLogo" @change="">
    <button v-on:click="">Click</button>
</template>

<script setup lang="ts">
//     definePageMeta({
//         middleware: 'auth'
//     })

//     const file = ref<File | null>(null);
//     const onChangeFile = (event: Event) =>{
//     const [_file] = (event.target as HTMLInputElement).files as FileList;

//     file.value = _file
//     };

//     const onSumbit = async () =>{
//     try{
//     if(!file.value) throw "Don't have image file";


//     const body = new FormData();
//     body.append('file', file.value, file.value.name)

//     // 10.147.17.253:5034/customer/image/profile/username
//     await $fetch('http://10.147.17.253:5034/restaurant/image/logo/earth1234',{
//       method: 'post',
//       body
//     })

//     alert('Uploaded')
//   }catch(error){
//     console.log(error)
//   }
// }
</script>