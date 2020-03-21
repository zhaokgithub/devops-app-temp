import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/Index'
import BasicLayout from '../components/layout/LayoutBasic'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
