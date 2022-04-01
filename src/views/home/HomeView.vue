<template>
  <div class="home">
    <nav-bar class="home_nav"><template #center>桃堡</template></nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import {Delete} from "@element-plus/icons-vue";
import {getHomeMultiData,getHomeGoodList} from "@/network/home";



export default {
  name: 'HomeView',
  data(){
    return{

    }
  },
  components: {
    NavBar,
    MainTabBar,
    Delete
  },
  created(){

  }
}
</script>

<style>
.home_nav{
  background-color: #FF7A9C;
}
.tab_control{
  position: sticky;
  top:5vh;
}

</style>
