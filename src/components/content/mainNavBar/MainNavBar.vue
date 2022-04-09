<template>
  <div class="navbar">
    <div class="user">
      <div class="avatar">
        <el-avatar size="large" shape="circle" @click="openInfo"><img :src="photoSrc"></el-avatar>
      </div>
      <div class="info" v-show="isOpen">
        <span class="name">Jaelyn</span>
        <br>
        <span class="num">Qindw1004@163.com</span><br>
        <span >粉丝:746w  关注:349</span>
      </div>
<!--      <div class="setting" v-show="isOpen">-->
<!--        <el-icon :size="iconSize"><setting /></el-icon>-->
<!--      </div>-->
    </div>
<!--    <div class="icon">-->
<!--      <div>-->
<!--        <el-icon :size="iconSize"><edit /></el-icon><br>-->
<!--        <span>博客</span>-->
<!--      </div>-->
<!--      <div>-->
<!--        <el-icon :size="iconSize"><folder-checked /></el-icon><br>-->
<!--        <span>待办</span>-->
<!--      </div>-->
<!--      <div>-->
<!--        <el-icon :size="iconSize"><chat-line-square /></el-icon><br>-->
<!--        <span>联系</span>-->
<!--      </div>-->
<!--      <div>-->
<!--        <el-icon :size="iconSize"><iphone /></el-icon><br>-->
<!--        <span>关于</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "UserNav",
  components:{

  },
  data(){
    return{
      iconSize:'1.5rem',
      photoSrc:require('@/assets/images/Avert.jpg'),
      isOpen:false
    }
  },
  methods:{
    openInfo(){
      this.$emit('changeOpen',this.isOpen);
      setTimeout(()=>{
        this.isOpen = !this.isOpen
      },200)
    }
  }
}
</script>

<style scoped>
.navbar{
  background-color: var(--el-color-white);
  display: grid;
  border-radius: 1rem;
  /*padding: 20px 20px 1rem 1rem;*/
  margin: 0.7rem;
}
.user{
  display: grid;
  grid-template-columns: 4rem 1fr 3rem;
}
.setting{
  text-align: right;
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