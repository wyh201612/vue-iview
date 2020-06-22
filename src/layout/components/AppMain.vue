<template>
  <section class="app-main">
      <router-view :key="key" />
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  props:{
    
  },
  created() {
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-main {
    overflow: hidden;
  }
</style>

