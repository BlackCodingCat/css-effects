<template>
  <div id="app">
    <div class="canvas-box">
      <canvas id="canvas">你的浏览器不支持canvas</canvas>
    </div>
    <div id="nav">
      <div class="nav-item">
        <router-link to="/">
          <p>
            <i class="icon iconfont icon-shouye"></i>
          </p>
          <div class="text">Home</div>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about">
          <p>
            <i class="icon iconfont icon-wode"></i>
          </p>
          <div class="text">About</div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #131313 0%, #02101c 100%);
}
.canvas-box {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 100px;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-item {
    margin: 0 30px;

    .text {
      margin-top: 8px;
    }

    a {
      font-weight: bold;
      color: rgb(216, 207, 207);

      &.router-link-exact-active {
        color: #42b983;
      }
      &:hover {
        color: #42b983;
      }
    }
  }
}
</style>