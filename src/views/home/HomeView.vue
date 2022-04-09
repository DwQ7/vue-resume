<template>
  <div class="common-layout" >
    <el-container >
        <home-aside ></home-aside>
      <el-container>
        <el-header>
          <home-header/>
        </el-header>
          <el-container class="home_right">
          <el-main>
            <home-main/>
          </el-main>
          <el-footer class="home_footer">
            Footer
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {Delete} from "@element-plus/icons-vue";
import {getHomeMultiData,getHomeGoodList} from "@/network/home";
import todoList from "@/views/home/childComps/todoList";
import HomeAside from "@/views/home/childComps/HomeAside";
import HomeHeader from "@/views/home/childComps/HomeHeader";
import HomeMain from "@/views/home/childComps/HomeMain";


export default {
  name: 'HomeView',
  data(){
    return{
      asideWidth:'200px'
    }
  },
  components: {
    NavBar,
    Delete,
    todoList,
    HomeAside,
    HomeHeader,
    HomeMain
  },
  created(){

  },
  methods:{

  }
}
</script>

<style>
.common-layout{
  height: 100%;
}

</style>
