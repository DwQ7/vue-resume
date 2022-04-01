<template>
  <div>
    <user-nav/>
  </div>
  <user-menu/>
</template>

<script>
import UserMenu from "@/views/user/childComps/UserMenu";
import UserNav from "@/views/user/childComps/UserNav";
export default {
  name: "UserView",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  components:{
    UserMenu,
    UserNav
  }
}
</script>

<style scoped>
div{
  background-color: var(--el-color-white);
  border-radius: 1rem;
  margin: 0.7rem;
  /*padding: 1rem;*/
}
</style>