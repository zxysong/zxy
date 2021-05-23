<template>
  <div class="login-content">
    <div class="bgc">
      <div class="form"></div>
    </div>
  </div>
</template>
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
    background: #fff;
  }
}
</style>