import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('views/home/home.vue')
const Cart=()=>import('views/cart/cart.vue')
const Category=()=>import('views/category/category.vue')
const Profile=()=>import('views/profile/profile.vue')
const Details=()=>import('views/details/details.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/details/:id',
    component:Details
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
