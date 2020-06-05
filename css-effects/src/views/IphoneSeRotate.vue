<template>
  <div class="iphonese-rotate-block">
    <div id="sticky">
      <canvas id="iphone-se" ref="iphoneSe" width="432" height="976"></canvas>
    </div>
  </div>
</template>

<script>
import PxLoader from 'pxloader'
import 'pxloader/PxLoaderImage'

export default {
  name: "IphoneSeRotate",
  data() {
    return {};
  },
  methods: {
    initCanvasSize() {
      this.$nextTick(() => {
        $("#iphone-se").height($(window).height());
      });
    },

    initImages() {
      const loader = new PxLoader();
      const images = [];
      for(let i=0; i<85; i++) {
        images[i] = loader.addImage(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.${('0' + (i + 1)).slice(-2)}.png`)
      }
      loader.addCompletionListener(() => {
        let context = $("#iphone-se")[0].getContext('2d');
        context.drawImage(images[0], 0, 0, 432, 976);
        
        $('.iphonese-rotate-block').addClass('loaded'); // 给定滚动高度为5000px
      })

      loader.start(); 
    },

    listenPageScroll() {
      $(window).on('scroll', () => {
        console.log('滚动高度'+ document.documentElement.scrollTop);
        console.log('实际高度'+ document.documentElement.scrollHeight);
        console.log('可视区域高度' + document.documentElement.clientHeight);
      })
    }
  },
  mounted() {
    this.initCanvasSize();
    this.initImages();
    this.listenPageScroll();
  }
};
</script>

<style lang="scss" scoped>
.iphonese-rotate-block {
  color: #ffffff;
  min-height: 100vh;
  background-color: #131313;
}
.iphonese-rotate-block.loaded {
  height: 5000px;
}

#sticky {
  position: sticky; /* 粘性 */
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

canvas {
  position: relative;
  top: -100px;
}
</style>