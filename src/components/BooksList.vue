<template>
     <div>
     <li><h1>titils is {{title}} <span class=" text-red-500">,id is {{id}}</span></h1></li>
     <roo-button v-on:click="sendtofather" >点击发送事件给父类</roo-button>
    </div>
</template>
<script>

export default {
  name:"BooksItem",
  props:{
    title:String,
    id:Number
  },
  methods:{
    sendtofather(){
      this.$emit("add")
    }
  }
}
</script>