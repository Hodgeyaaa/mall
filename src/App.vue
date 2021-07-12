<template>
  <div id="app">
    <navbar/>
     <router-view/>
  </div>
</template>
<script>
import navbar from './components/content/nav'

  export default {

    components: {
      navbar
    
    }
  };
</script>
<style>
  @import 'assets/css/normalize.css';
  @import 'assets/css/base.css';
</style>
