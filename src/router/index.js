import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import store from '@/store'

const Home = () => import('@/views/home/HomeView')
const Shop = () => import('@/views/shopping/ShopView')
const Category = () => import('@/views/category/CategoryView')
const User = () => import('@/views/user/UserView')
const Detail = () =>import('@/views/detail/DetailView')
const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    tittle:'首页',
    children:[
      {
        path: '/',
        component: Home,
      },
    ]
  },
  {
    path: '/shopping',
    name: 'shop',
    tittle:'购物',
    component: Shop,

  },
  {
    path:'/category',
    name:'category',
    tittle:'分类',
    component: Category,

  },
  {
    path: '/user',
    name:'user',
    tittle:'用户',
    component: User,
  },
  {
    path: '/detail/:iid',
    name:'detail',
    tittle:'详情',
    component:Detail
  }
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
