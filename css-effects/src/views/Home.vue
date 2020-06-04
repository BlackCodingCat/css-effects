<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/panda.png">
    <HelloWorld msg="Welcome to BlackCodingCat's CssEffectsHome"/>
    <div class="project-list">
      <ProjectList></ProjectList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home/HelloWorld'
import ProjectList from '@/components/Home/ProjectList'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ProjectList
  }
}
</script>
<style lang="scss">
  .logo {
    width: 250px;
  }
  .project-list {
    margin-top: 80px;
  }
</style>
