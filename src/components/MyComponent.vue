<template>
  <div>我是自定义组件，{{name}},age is {{age}}</div>

</template>
<script>
  export default{
    name:"MyComponent",
    props:{
      name:String,
      age:String
    }
  }
</script>