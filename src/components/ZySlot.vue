<!-- 作用域插槽 -->
<template>
  <div>
    <p>作用域插槽:将子类的数组返回给父类的组件进行使用</p>
    <p>现在想让父类组件使用子组件的{{user.name}}</p>
    <slot v-bind:user="user"></slot>
  </div>
</template>
<script>
  export default {
    name: "ZySlot",
    data() {
      return {
        user: {
          name: "蒲小帅"
        }
      }
    }
  }
</script>