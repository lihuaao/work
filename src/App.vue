<template>
  <div id="app">
    <examination />
  </div>
</template>

<script>
import examination from './components/examination.vue'
export default {
  name: 'App',
  components: {
    examination
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
}
</style>
