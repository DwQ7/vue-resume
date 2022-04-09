<template>
  <div>
    <user-nav/>
  </div>
  <user-menu/>
</template>

<script>
import UserMenu from "@/views/user/childComps/UserMenu";
import UserNav from "@/components/content/mainNavBar/MainNavBar";
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

</style>