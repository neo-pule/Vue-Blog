<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomeApp msg="we did it.."/> -->
    <!-- <a href="#/">Register</a> | -->
  <!-- <a href="#/home">List</a> | -->
  <component :is="currentView" />
            <h3>Upload photo to local gallery</h3>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeApp from "./components/Home.vue"

const routes = {
  '/home': HomeApp,
  '/': HelloWorld
}


export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  //   HomeApp
  // }, 
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash // eslint-disable-line no-mixed-spaces-and-tabs
		})
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
