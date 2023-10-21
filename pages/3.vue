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
      <button v-on:click="requestSignup">Request</button>
      <button v-on:click="goBack">Back</button>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        openDay: null
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
        for (let index = 1; index <= 7; index++) {
          const check = document.getElementById(index)
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
        for (let index = 1; index <= 7; index++) {
          const check = document.getElementById(index).value
          check.toString()
          data += check
        }
        this.openDay = data
      },
      /*
      .
      .
     image function
      .
      .
      .
      */
      requestSignup(){ //check email already use not complete
        const pattern = /Error:/g
        this.getCheckBox()
        const buff = localStorage.getItem("h1")
        let form = JSON.parse(buff)
        form.push(this.openDay)
        
        const requestApi = async () => {
          const data = await useSignUpForm(form[0],form[1],form[2],form[3],form[4],form[5],form[6],"","","",form[7],form[8],this.openDay)
          //console.log(data.match(pattern))
          //console.log(data)
          //console.log(typeof(data))

          if (typeof(data) == "number"){
            await localStorage.setItem("refer",data)
            
            setTimeout(await navigateTo('/authentication'), 1000)
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
        this.$nextTick(this.islogin())
        this.$nextTick(this.setCheckBox())
        this.$nextTick(this.setReferCode())
        this.$nextTick(this.haveLocalStorage())
    }
  }
</script>