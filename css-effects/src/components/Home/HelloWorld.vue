<template>
  <div class="hello">
    <h1 class="hello-slogan">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello-slogan{
  background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgb(255, 250, 236)), to(rgba(51, 51, 51, 1)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
