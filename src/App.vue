<template>
  <div id="app">
    <left-nav></left-nav>
    <MainContent></MainContent>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'app',
  components: {
    LeftNav,
    MainContent
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
