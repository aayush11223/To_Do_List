<template>
  <div id="app">
    <CreateBtn />
    <ListofWorks />
  </div>
</template>

<script>
import CreateBtn from './components/TodoElements/CreateBtn.vue'
import ListofWorks from './components/TodoElements/ListofWorks.vue'

export default {
  name: 'App',
  components: {
    CreateBtn,
    ListofWorks,
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
