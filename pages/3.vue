<template>
<Header :logo="true" :login="true"/>
  <div class="wrapper">
    <div class="wrapper1">
      <div class="date">
        <ul>
          <div class="q1">
            <li>
              <p>Sunday</p>
              <input type="checkbox" id="1" value="0" >
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
          </div>
          <div class="q2">
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
          </div>
        </ul>
      </div>
      </div>
    </div>

    <div class="wrapper2">
      <div class="img">
        <div>
          <p>Logo Image</p>
          <input type="file" accept="image/png" id="imageLogo" class="imageLogo" @change="onLogoChangeFile">
        </div>

        <div>
          <p>Menu Image</p>
          <input type="file" accept="image/png" id="imageMenu" class="imageMenu"  multiple @change="onMenuChangeFile" >
          <div class="showImageMenuBox" id="showImageMenuBox">
          </div>
        </div>

        <div>
          <p>Enviroment Image</p>
          <input type="file" accept="image/png" id="imageMenu" class="imageMenu"  multiple @change="onEnvChangeFile" >
          <div class="showImageEnvBox" id="showImageEnvBox">
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="back" >
        <button v-on:click="goBack">Back</button>
      </div>
      
      <div class="request" >
        <button v-on:click="async () => {await onLogoSumbit();await OnMenuSubmit();await OnEnvSubmit(); if (haveImage()){requestSignup()}}">Request</button>
      </div>
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
          const runtime = useRuntimeConfig()
          const api = runtime.public.STORAGE_URL + 'restaurant/image/logo/'
          await $fetch( api + form[3],{ method: 'post', body })
          //alert('Uploaded')
          return 1
        }

      }catch(error){
        console.log(error)
      }
    }

//=== menu image ===
const fileMenu = ref<File | null>(null);
const selectImageMenu:File[] = []

let counterMenu:number = 0
const onMenuChangeFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList
  selectImageMenu[selectImageMenu.length] = _file
  fileMenu.value = _file
  if (fileMenu.value){
    statusMenu = 1
  }else{
    statusMenu = 0
  }

  //show list of image
  const div = document.getElementById("showImageMenuBox")

  //div of filename
  const divFile = document.createElement("div")
  divFile.style.display = "flex"
  divFile.style.justifyContent = "space-between"
  divFile.style.margin = "10px"
  divFile.id = "Menu" + counterMenu.toString()

  //filename show
  let p = document.createElement("p")
  p.style.color = "rgb(102,102,102)"
  p.style.margin = "5px"
  p.style.fontSize = "16px"
  _file.name.length > 34 ? p.innerHTML=_file.name.slice(0,20) +"..."+ _file.name.slice(_file.name.length - 6,_file.name.length) : p.innerHTML=_file.name

  //button delete
  let btnDel = document.createElement("BUTTON")
  btnDel.addEventListener('click',() =>{document.getElementById(divFile.id)?.remove()
    counterMenu -= 1
    selectImageMenu.splice(Number((divFile.id).replace('Menu','')),1)
    console.log(selectImageMenu.length)})
  btnDel.style.cursor = "pointer"
  btnDel.style.backgroundColor = "tomato"
  btnDel.style.color = "white"
  btnDel.style.borderRadius = "5px"
  btnDel.innerHTML = "ลบ"
  btnDel.style.fontSize = "12px"
  btnDel.style.width = "2rem"

  divFile.append(p)
  divFile.append(btnDel)

  //show to 
  div?.append(divFile)
  counterMenu += 1
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
        console.log(body)
        const runtime = useRuntimeConfig()
        const api = runtime.public.STORAGE_URL + 'restaurant/image/menu/'
        await $fetch( api + form[3],{ method: 'post', body })
      }catch(error){
        console.log(error)
      }
    }
    return 1
  }
}

//=== env image ===
const fileEnv = ref<File | null>(null);
const selectImageEnv:File[] = []

let couterEnv:number = 0
const onEnvChangeFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList
  selectImageEnv[selectImageEnv.length] = _file
  fileEnv.value = _file
  if (fileMenu.value){
    statusEnv = 1
  }else{
    statusEnv = 0
  }

  //show list of image
  const div = document.getElementById("showImageEnvBox")

  //div of filename
  const divEnv = document.createElement("div")
  divEnv.style.display = "flex"
  divEnv.style.justifyContent = "space-between"
  divEnv.style.margin = "10px"
  divEnv.id = "Env" + couterEnv.toString()

  //filename show
  let p = document.createElement("p")
  p.style.color = "rgb(102,102,102)"
  p.style.margin = "5px"
  p.style.fontSize = "16px"
  _file.name.length > 34 ? p.innerHTML=_file.name.slice(0,20) +"..."+ _file.name.slice(_file.name.length - 6,_file.name.length) : p.innerHTML=_file.name

  //button delete
  let btnDel = document.createElement("BUTTON")
  btnDel.addEventListener('click',() =>{document.getElementById(divEnv.id)?.remove()
    couterEnv -= 1
    selectImageEnv.splice(Number((divEnv.id).replace('Env','')),1)
    console.log(selectImageEnv.length)})
  btnDel.style.backgroundColor = "tomato"
  btnDel.style.cursor = "pointer"
  btnDel.style.color = "white"
  btnDel.style.borderRadius = "5px"
  btnDel.innerHTML = "ลบ"
  btnDel.style.fontSize = "12px"
  btnDel.style.width = "2rem"

  divEnv.append(p)
  divEnv.append(btnDel)

  div?.append(divEnv)
  couterEnv += 1
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
        const runtime = useRuntimeConfig()
        const api = runtime.public.STORAGE_URL + 'restaurant/image/env/'
        await $fetch( api + form[3],{ method: 'post', body })
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
                    location.replace('/')
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
            setTimeout(() => {
              navigateTo("/authentication")
            }, 500);
          }
          else{
            alert(data)
            await localStorage.setItem("refer",'')
          }
          //console.log(data)
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
        this.$nextTick(this.haveLocalStorage)
    }
  }
</script>

<style scoped src="@/assets/styles/imageUpload.css"></style>