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
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Navbar from '@/components/shared/navigation/Navbar'

export default {

  data() {
    return {
      windowHeight: 0,
      txt: ''
    }
  },

  watch: {
    windowHeight(newHeight, oldHeight) {
     this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    }
  },

  components: {
    Navbar
  },
  
  mounted() {
    console.log(window.innerHeight);
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
   beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
   onResize() {
    this.windowHeight = window.innerHeight
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
