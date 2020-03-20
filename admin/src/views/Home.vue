<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <loginIn msg="管理后台"/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginIn from '@/components/loginIn.vue';

export default {
  name: 'Home',
  components: {
    loginIn,
  },
};
</script>
