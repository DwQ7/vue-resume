<template>
  <div id="app">
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive" />
      </keep-alive>
    </router-view>
  </div>

</template>

<script>


export default {
  name:'App',
  data(){
    return{
    }
  },
  components:{
  }
}
</script>

<style>
  /*style中引用css固定写法*/
  @import "./assets/css/base.css";

  #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
