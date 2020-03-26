<template>
  <div class="home">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="mapPage">
      <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
        <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
        <bm-control>
          <button @click="addZoom(3)">缩放至最大</button>
          <button @click="addZoom(17)">还原</button>
          <button @click="addZoom(1)">缩放至最小</button>
        </bm-control>
      </baidu-map>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import baiduMap from '@/components/map.vue';

export default {
  name: 'Home',
  components: {
    // baiduMap,
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 114.008761;
      this.center.lat = 22.59888;
      this.zoom = 18;
      map.enableScrollWheelZoom(true);
    },
    addZoom(level) {
      this.zoom = level;
    },
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
