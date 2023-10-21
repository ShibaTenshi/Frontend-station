<template>
    <Header :logo="true" :login="true"></Header>
    <div class="content">
      <div class="head">
        <div class="pic">
          <img src="@/assets/calendar-clock1.png" alt="" class="calendar">
          <img class="chef" src="@/assets/kisspng-chef-s-uniform.png" alt="">
        </div>

        <div class="head_text">
          <p class="i">Thank-You</p>
          <p class="ii">For your Participation</p>
        </div>
      </div>

      <div class="text">
        <p>Please wait for your approval from admin for enter website.</p>
      </div>
    </div>
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

<style scoped src="@/assets/styles/signupRecive.css"></style>