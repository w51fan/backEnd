<template>
  <div class="login-container">
    <el-form
      class="login-form"
      autocomplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">登陆系统</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container svg-container_login"></span>
        <el-input
          class="loginPageInput"
          name="username"
          type="text"
          v-model="loginForm.username"
          autocomplete="on"
          placeholder="用户名"
          prefix-icon="el-icon-user-solid"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container"></span>
        <el-input
          class="loginPageInput"
          name="password"
          :type="passwordType"
          @keyup.enter.native="handleLogin"
          v-model="loginForm.password"
          autocomplete="on"
          placeholder="密码"
          prefix-icon="el-icon-key"
        />
        <!-- <span class="show-pwd" @click="showPwd">
        </span>-->
      </el-form-item>

      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;"
        :loading="loading"
        @click="handleLogin"
      >登陆</el-button>

      <!-- <div class="tips">
        <span>用户名 : admin</span>
        <span>{{$t('login.password')}} : {{$t('login.any')}}</span>
      </div>
      <div class="tips">
        <span style="margin-right:18px;">{{$t('login.username')}} : editor</span>
        <span>{{$t('login.password')}} : {{$t('login.any')}}</span>
      </div>-->
    </el-form>
  </div>
</template>
<script>
// @ is an alias to /src
// import login from '@/components/login.vue';
// import { isvalidUsername } from '@/utils/validate';
// import LangSelect from '@/components/LangSelect';
// import SocialSign from './socialsignin';

export default {
  name: 'Home',
  components: {
    // login,
  },
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!isvalidUsername(value)) {
    //     callback(new Error('Please enter the correct user name'));
    //   } else {
    //     callback();
    //   }
    // };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: 'admin',
        password: '1111111',
      },
      loginRules: {
        // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
    };
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
    },
    handleLogin(){
      this.$router.push({
        name: 'Index',
      })
    }
  },
};
</script>
<style  lang="less">
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    .loginPageInput .el-input__inner {
      -webkit-appearance: none;
      background-color: #283443 !important;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #fff !important;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      // padding: 0 15px;
      -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
    }
    .el-form-item__content{
      line-height: 0;
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }
}
</style>
