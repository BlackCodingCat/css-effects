<template>
  <div class="project-list-block">
    <ul class="project-list">
      <li class="project-item" v-for="item in projectList" :key="item.id">
        <p class="title">{{item.projectName}}</p>
        <p class="description">{{item.description}}</p>
        <button class="btn" @click="viewDetail(item.route)">点击查看</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      projectList: [
        {
          projectId: 1,
          projectName: "iPhoneSE官网旋转动画",
          description: `本节讲述Apple iPhone SE产品网页的特效：当页面向下滑动的时候，iPhone SE图片会旋转并显示介绍文字。
          旋转的iPhone SE由一组图片构成，我们可以通过某种方式将其拼接为动画的关键帧。旋转动画在HTML的<canvas>标签中加载，
          本节我们使用了共85张关键图片，将其加载在canvas中，通过对页面滚动比例的判断来控制图片和canvas位置的显示，来实现整个
          的旋转效果。事不宜迟，让我们赶紧开始吧！
          `,
          route: '/projectDetail/iphoneSeRotate'
        }
      ]
    };
  },
  methods: {
    viewDetail(route) {
      this.$router.push({path: route});
    }
  },
};
</script>

<style lang="scss" scoped>
.project-list-block {
  width: 100%;

  .project-list {
    color: rgb(206, 200, 200);
    .project-item {
      width: 60%;
      box-sizing: border-box;
      padding: 10px 20px 20px 20px;
      box-shadow: 0 0 14px #cacbcc;
      margin: 20px auto;
      border-radius: 6px;

      .title {
        text-align: left;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 2px;
      }
      .description {
        text-align: left;
        line-height: 1.6;
        margin-top: 12px;
        letter-spacing: 2px;
        text-indent: 40px;
      }
      .btn {
        margin-top: 20px;
        border: none;
        outline: none;
        font-size: 14px;
        line-height: 1;
        font-weight: 500;
        padding: 12px 20px;
        border-radius: 4px;
        color: rgb(206, 200, 200);
        background: rgb(49, 49, 49);
        transition: .1s;
      }
      .btn:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>