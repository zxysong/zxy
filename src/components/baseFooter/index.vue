
<template>
  <div class="footer">
    <div class="item" style="flex: 1.5">
      <div>司越教育</div>
      <p class="mr-30">司越教育是一家以浙江普通专升本培训、</p>
      <p>就业培训、综合型专业教育机构。</p>
      <p>我司一直秉承“因为专业，所以放心”的教育理念。</p>
      <p>在教育的道路上，我们一直披荆斩棘，勇创辉煌，</p>
      <p>全身心地为广大学子提升综合素质和竞争力而努力。</p>
      <p>相信我们，会在你通往本科道路上为你保驾护航，</p>
      <p>在你走向更好的未来过程中助你一臂之力。</p>
    </div>
    <div class="item">
      <div>辅导课堂</div>
      <p class="mr-30 base-pointer">全日制协议班</p>
      <p class="mr-30 base-pointer">至尊vip保过班</p>
      <p class="mr-30 base-pointer">SVIP保过班</p>
    </div>
    <div class="item">
      <div>试题下载</div>
      <p class="mr-30 base-pointer">高等数学</p>
      <p class="mr-30 base-pointer">大学英语</p>
      <p class="mr-30 base-pointer">大学语文</p>
      <p class="mr-30 base-pointer">历年真题</p>
    </div>
    <div class="item">
      <div>浙江司越专升本</div>
      <p class="mr-30">地址：江干区学源街文创大厦9楼929</p>
      <p>电话：0571-81955565</p>
      <p>邮箱：info@education&learning.com</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  display: flex;
  width: 100%;
  height: 400px;
  background: #535553;
  padding-top: 80px;
  padding-left: 60px;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    & > div {
      color: #c0a061;
      font-size: 16px;
    }
    & > p {
      color: #fff;
      font-size: 12px;
    }
  }
  .mr-30 {
    margin-top: 30px;
  }
}
</style>