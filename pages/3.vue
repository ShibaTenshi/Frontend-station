<template>
  <Header :logo="true" :login="true"/>
    <div>
      <div class="date">
        <ul>
          <li>
            <p>Sunday</p>
            <input type="checkbox" id="1" value="0">
          </li>
          <li>
            <p>Monday</p>
            <input type="checkbox" id="2" value="0">
          </li>
          <li>
            <p>Tuesday</p>
            <input type="checkbox" id="3" value="0">
          </li>
          <li>
            <p>Wednesday</p>
            <input type="checkbox" id="4" value="0">
          </li>
          <li>
            <p>Thursday</p>
            <input type="checkbox" id="5" value="0">
          </li>
          <li>
            <p>Friday</p>
            <input type="checkbox" id="6" value="0">
          </li>
          <li>
            <p>Saturday</p>
            <input type="checkbox" id="7" value="0">
          </li>

        </ul>
      </div>

      <div class="img">
        <p>logo</p>
        <input type="file" accept="image/png" id="imageLogo" class="imageLogo" @change="onLogoChangeFile">

        <p>Menu</p>
        <input type="file" accept="image/png" id="imageMenu" class="imageMenu"  multiple @change="onMenuChangeFile" >
        <div class="showImageMenuBox" id="showImageMenuBox">
        </div>

        <p>Enviroment</p>
        <input type="file" accept="image/png" id="imageMenu" class="imageMenu"  multiple @change="onEnvChangeFile" >
        <div class="showImageEnvBox" id="showImageEnvBox">
        </div>
      </div>

      <button v-on:click="async () => {await onLogoSumbit();await OnMenuSubmit();await OnEnvSubmit(); if (haveImage()){requestSignup()}}">Request</button>
      <button v-on:click="goBack">Back</button>
    </div>
</template>

<script setup lang="ts">
let statusLogo = 0
let statusMenu = 0
let statusEnv = 0
function haveImage():boolean {
  if (statusEnv == 1 && statusLogo == 1 && statusMenu == 1){
    return true
  }else{
    return false
  }
}

// logo image
    const file = ref<File | null>(null);
    const onLogoChangeFile = (event: Event) =>{
      const [_file] = (event.target as HTMLInputElement).files as FileList;
      file.value = _file
      if (file.value){
        statusLogo = 1
      }
      else{
        statusLogo = 0
      }
    };

    const onLogoSumbit = async () =>{
      try{
        if(!file.value) {
          alert("Plese choose logo image")
          return 0
        }
        if (statusLogo == 1 && statusMenu == 1 && statusEnv == 1){
          //console.log(file.value, file.value.name)
         const buff:any = localStorage.getItem("h1")
          let form = JSON.parse(buff)

          const body = new FormData();
          body.append('file', file.value, file.value.name)
          await $fetch('http://10.147.17.253:5034/restaurant/image/logo/'+ form[2],{ method: 'post', body })
          //alert('Uploaded')
          return 1
        }

      }catch(error){
        console.log(error)
      }
    }

// menu image
const fileMenu = ref<File | null>(null);
const selectImageMenu:File[] = []

const onMenuChangeFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList
  selectImageMenu[selectImageMenu.length] = _file
  fileMenu.value = _file
  if (fileMenu.value){
    statusMenu = 1
  }
  else{
    statusMenu = 0
  }

  //show list of image
  const div = document.getElementById("showImageMenuBox")
  let p = document.createElement("p")
  p.innerHTML = _file.name
  div?.append(p)
}
const OnMenuSubmit = async () => {
  if (selectImageMenu.length == 0){
    alert("Pleast choose Menu image")
    return 0
  }

  if(statusLogo == 1 && statusMenu == 1 && statusEnv == 1){
    for (let index = 0; index < selectImageMenu.length; index++) {
      fileMenu.value = selectImageMenu[index]
      try{
        const buff:any = localStorage.getItem("h1")
        let form = JSON.parse(buff)
        const body = new FormData();
        body.append('file', fileMenu.value, fileMenu.value.name)
        await $fetch('http://10.147.17.253:5034/restaurant/image/menu/'+ form[2],{ method: 'post', body })
      }catch(error){
        console.log(error)
      }
    }
    return 1
  }
}

//env image
const fileEnv = ref<File | null>(null);
const selectImageEnv:File[] = []

const onEnvChangeFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList
  selectImageEnv[selectImageEnv.length] = _file
  fileEnv.value = _file
  if (fileMenu.value){
    statusEnv = 1
  }
  else{
    statusEnv = 0
  }

  //show list of image
  const div = document.getElementById("showImageEnvBox")
  let p = document.createElement("p")
  p.innerHTML = _file.name
  div?.append(p)
}
const OnEnvSubmit = async () => {
  if (selectImageEnv.length == 0){
    alert("Pleast choose Enviroment image")
    return 0
  }
  if(statusLogo == 1 && statusMenu == 1 && statusEnv == 1){
    for (let index = 0; index < selectImageEnv.length; index++) {
      fileEnv.value = selectImageEnv[index]
      try{
        const buff:any = localStorage.getItem("h1")
        let form = JSON.parse(buff)
        const body = new FormData();
        body.append('file', fileEnv.value, fileEnv.value.name)
        await $fetch('http://10.147.17.253:5034/restaurant/image/env/'+ form[2],{ method: 'post', body })
      }catch(error){
        console.log(error)
      }
    }
    return 1
  }
}
</script>

<script lang="ts">
  export default {
    data(){
      return{
        openDay: ""
      }
    },
    methods:{
      islogin(){
        const cookie = useCookie('token')
        if (cookie.value != ""){
          navigateTo('/usrs')
        }
      },

      haveLocalStorage(){
                const arr = localStorage.getItem("h1")
                if (arr == null){
                    navigateTo('/')
                }
            },
      setReferCode(){
        const referCode = localStorage.setItem("refer","")
      },

      setCheckBox(){
        for (let index:any = 1; index <= 7; index++) {
          const check:any = document.getElementById(index)
          check.addEventListener('click', function(){
            if (check.value == 0){
              check.value = 1
            }else{
              check.value = 0
            }
          })
        }
      },

      getCheckBox(){
        let data = ""
        for (let index:any = 1; index <= 7; index++) {
          const check:any = document.getElementById(index)
          data += check.value
        }
        this.openDay = data
      },

      requestSignup(){
        const pattern = /Error:/g
        this.getCheckBox()
        const buff:any = localStorage.getItem("h1")
        let form = JSON.parse(buff)
        form.push(this.openDay)
        
        const requestApi = async () => {
          const data:string = await useSignUpForm(form[0],form[1],form[2],form[3],form[4],form[5],form[6],"","","",this.openDay,form[8],form[7])

          if (typeof(data) == "number"){
            await localStorage.setItem("refer",data)
            
          }
          else{
            alert(data)
            await localStorage.setItem("refer",'')
          }
          console.log(data)
        }
        requestApi()
      },

      goBack(){
        navigateTo('/2')
      }
    },
    mounted: function() {
        this.$nextTick(this.islogin)
        this.$nextTick(this.setCheckBox)
        this.$nextTick(this.setReferCode)
        this.$nextTick(this.haveLocalStorage)
    }
  }
</script>