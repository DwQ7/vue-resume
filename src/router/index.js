import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import store from '@/store'

const Home = () => import('@/views/home/HomeView')
const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    tittle:'Home',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //history模式
  //history: createWebHashHistory(process.env.BASE_URL), //hash模式
  routes
})

router.beforeEach((to,from,next) =>{
  document.title = to.name
  to.meta.keepAlive = true
  store.commit("showLoading",true)
  next();
})

router.afterEach((to,from,next) =>{
  store.commit("showLoading",false)
})
export default router
