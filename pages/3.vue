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
      </div>

      <button v-on:click="onLogoSumbit(); requestSignup()">Request</button>
      <button v-on:click="goBack">Back</button>
    </div>
</template>

<script setup lang="ts">
// logo image
    const file = ref<File | null>(null);
    const onLogoChangeFile = (event: Event) =>{
      const [_file] = (event.target as HTMLInputElement).files as FileList;
      file.value = _file
    };

    const onLogoSumbit = async () =>{
      try{
        if(!file.value) throw "Don't have image file"

        const buff:any = localStorage.getItem("h1")
        let form = JSON.parse(buff)

        const body = new FormData();
        body.append('file', file.value, file.value.name)
        await $fetch('http://10.147.17.253:5034/restaurant/image/logo/'+ form[2],{ method: 'post', body })
        alert('Uploaded')

      }catch(error){
        console.log(error)
      }
    }

// menu image

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