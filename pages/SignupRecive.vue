<template>
    <Header :logo="true" :login="true"></Header>
    <h1>Signup Recive</h1>
</template>

<script>
export default{
    methods:{
        islogin(){
        const cookie = useCookie('token')
        if (cookie.value != ""){
          navigateTo('/usrs')
        }
      }
    },
    mounted: function(){
        this.$nextTick(this.islogin())
    }
}
</script>