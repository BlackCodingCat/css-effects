<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/panda.png">
    <HelloWorld msg="Welcome to BlackCodingCat's CssEffectsHome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
  .logo {
    width: 250px;
  }
</style>
