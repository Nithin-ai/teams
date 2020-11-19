<template>
  <div id="app">
    <div id="nav">
      <scale-rotate noOverlay isOpen>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/profile">Profiles</router-link>
      </scale-rotate>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ScaleRotate } from 'vue-burger-menu'

export default {
  components:{
    ScaleRotate
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
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #acdd52;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
