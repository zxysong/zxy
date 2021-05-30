<template>
  <div class="login-content">
    <div class="bgc">
      <div class="form">
        <p class="title">司越官网后台管理</p>
        <el-form label-width="0px" :model="loginform">
          <el-form-item>
            <el-input v-model="loginform.username"></el-input>
            <i class="icon el-icon-user"></i>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginform.password"></el-input>
            <i class="icon el-icon-lock"></i>
          </el-form-item>
        </el-form>
        <div class="submit" @click="submit">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      this.$router.replace({
        path: "/admin/admintest",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-content {
  width: 100%;
  height: 100%;
  .bgc {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../assets/imgs/login.png") no-repeat right bottom;
    background-size: cover;
  }
  .form {
    position: absolute;
    left: 180px;
    top: 50%;
    transform: translateY(-50%);
    width: 400px;
    height: 300px;
    padding: 40px;
    background: #fff;
    /deep/.el-form-item__content {
      position: relative;
      .el-input__inner {
        padding-left: 30px;
      }
    }
    .icon {
      position: absolute;
      left: 10px;
      top: 12px;
    }
  }
  .title {
    text-align: center;
    padding-bottom: 30px;
  }
  .submit {
    width: 100%;
    background-color: #3786f5;
    color: #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>