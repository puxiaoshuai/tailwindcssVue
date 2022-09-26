<template>
  <div class="bg-red-500 w-20 h-20">{{ name }}</div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  props: {
    name: String,
  },
};
</script>

<style scoped>
</style>