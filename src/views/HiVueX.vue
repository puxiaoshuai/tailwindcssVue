<template>
   <div>
   <p>{{name}},计数{{count}}</p>
   <p>{{name}},vuex计数{{$store.state.count}}</p>
   <roo-button @click="add">基础+1</roo-button>
   <roo-button v-on:click="addvuex">vuex计数</roo-button>
   <roo-button v-on:click="jianvuex">vuex耗时计数</roo-button>
  </div>
</template>
<script>
  export default{
    name:"HiVuex",
    data(){
      return {
        name:"vuex",
        count:0
      }
    },
    methods:{
      add(){
        this.count++
      },
      addvuex(){
        
        this.$store.commit('add')
      },
      jianvuex(){
        this.$store.dispatch("jian1")
      }
    }
  }
</script>