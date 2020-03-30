<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  min-width: 1200px;
  margin: 20px;
}
</style>
