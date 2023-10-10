<template>
    <div>
      <h1>page3</h1>
      <p>{{ text }}</p>
      <button v-on:click="test2">click</button>
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
    async test(){
      const axios = useNuxtApp().$axios
      const api = 'https://jsonplaceholder.typicode.com/todos/1'
      axios.get(api).then((response) => {
        console.log(response)
      })
    },

    async test2(){
      const axios = useNuxtApp().$axios
      const api = 'https://jsonplaceholder.typicode.com/posts'
      axios.post(api, {
        title: 'foo',
        body: 'bar',
        userId: '2',
      },{
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
      ).then ((response) => {
        this.text = response.data
      }).catch ((error) => {
        console.log(error)
      })
    }
  }
}
</script>
    