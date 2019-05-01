<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <left-nav></left-nav>
  </div>
</template>

<script>
import LeftNav from './components/left-nav.vue'

export default {
  name: 'app',
  components: {
    LeftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
