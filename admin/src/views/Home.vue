<template>
  <div class="home">
    <login :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import login from '@/components/login.vue';

export default {
  name: 'Home',
  components: {
    // login,
  },
  data() {
    return {
      msg: '登陆',
    };
  },
  methods: {

  },
};
</script>
<style lang="less">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.mapPage {
  display: flex;
  justify-content: center;
  margin: 20px;
  .map {
    width: 400px;
    height: 300px;
  }
}
</style>
