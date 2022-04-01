<template>
  <div class="user_nav">
    <div class="user">
      <div class="avatar">
        <el-avatar size="large" shape="circle"><img :src="photoSrc"></el-avatar>
      </div>
      <div class="info">
        <span class="name">Jaelyn</span>
        <br>
        <span class="num">Qindw1004@163.com</span><br>
        <span >粉丝：746w 关注：349</span>
      </div>
      <div>
        <el-icon :size="iconSize"><setting /></el-icon>
      </div>
    </div>
    <div class="icon">
      <div>
        <el-icon :size="iconSize"><star /></el-icon><br>
        <span>收藏</span>
      </div>
      <div>
        <el-icon :size="iconSize"><circle-check /></el-icon><br>
        <span>订阅</span>
      </div>
      <div>
        <el-icon :size="iconSize"><timer /></el-icon><br>
        <span>足迹</span>
      </div>
      <div>
        <el-icon :size="iconSize"><wallet /></el-icon><br>
        <span>零钱</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNav",
  data(){
    return{
      iconSize:'1.5rem',
      photoSrc:require('@/assets/images/Avert.jpg')
    }
  }
}
</script>

<style scoped>
.user_nav{
  padding: 20px 20px 10px 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.user{
  display: grid;
  grid-template-columns: 4rem 1fr 1.5rem;
}
.icon{
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.icon div span{
  font-size: 0.8rem;
  align-items: center;
  justify-items: center;
  vertical-align: middle;
}
.info span.name{
  font-size: 1rem;
  font-weight: bold;
  color: var(--el-color-black);
}
.info span.num{
  font-size: 0.5rem;
  color: var(--el-color-info);
}
.info .num~span{
  font-size: 0.5rem;
  color: var(--el-color-info);
}
</style>