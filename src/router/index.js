import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/aticlelist/:about(jyxd|fszd|english|politics|math|profession)',
    name:'aticle',
    component: () => import('@/views/AticleList.vue')
  },
  {
    path: '/:about(jyxd|fszd|english|politics|math|profession)',
    name: 'Detail',
    component:()=>import('@/views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router