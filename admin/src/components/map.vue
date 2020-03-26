<template>
  <div>
    <div>地图</div>
    <baidu-map class="map"></baidu-map>
  </div>
</template>

<script>

export default {
  name: 'baiduMap',
  data() {
    return {};
  },
  mounted() {
  },
};
</script>

<style scoped lang="less">
html,
body,
.map {
  width: 400px;
  height: 300px;
}
</style>
