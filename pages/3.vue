<template>
  <Header :logo="true" :login="true"/>
    <div>
      <h1>page3</h1>
      <p>{{ text }}</p>
      <button v-on:click="test3">click</button>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        text: null
      }
    },
    methods:{
      islogin(){
        const cookie = useCookie('token')
        if (cookie.value != ""){
          navigateTo('/usrs')
        }
      },
    },
    mounted: function() {
        this.$nextTick(this.islogin())
    }
  }
</script>