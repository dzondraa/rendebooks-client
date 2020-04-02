<template>
  <div id="app" class="container">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '@/components/shared/navigation/Navbar'

export default {

  components: {
    Navbar
  }
}
</script>

<style lang="scss">
body {
	background: url('./assets/images/background.jpg');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background-color: #fff;
	box-shadow: 5px 5px 10px 5px;
	padding: 0;
}

</style>
