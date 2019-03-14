<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <MainForm></MainForm> -->
    <router-view/>
  </div>
</template>

<script>
import MainForm from './pages/builder/MainForm.vue'
import GetForm from './pages/form/GetForm.vue'
import ControlPanel from './pages/controlpanel/ControlPanel.vue'
import Present from './pages/present/Present.vue'
import Details from './pages/present/Details.vue'
export default {
  name: 'App',
  components: {
    MainForm,
    GetForm,
    ControlPanel,
    Present,
    Details
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
