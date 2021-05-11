<!-- 插槽 -->
<template>
  <div>
  <p>后面的插槽内容是:<slot></slot></p>
  <div>具名插槽========><slot name="header"></slot></div>
</div>
</template>
<script>
  export default{
    name:"SoltItem"
  }
</script>