import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const Shopcar = () => import('@/views/shopcar/Shopcar')
const Detail = () => import('@/views/detail/Detail')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      name: '首页'
    }
  },
  {
    path: '/shopcar',
    component: Shopcar,
    meta: {
      name: '购物车'
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      name: '详情页',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.name;
  next();
})
export default router
