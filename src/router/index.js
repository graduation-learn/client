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
  name: 'aticle',
  component: () => import('@/views/AticleList.vue')
},
{
  path: '/:about(jyxd|fszd|english|politics|math|profession)',
  name: 'Detail',
  component: () => import('@/views/Detail.vue')
},
{
  path: '/personal',
  name: 'personal',
  component: () => import('@/views/Personal'),
  redirect: '/personal/showArticle/english',
  children: [
    {
      path: 'addArticle/:about(english|politics|math|profession)',
      name: 'addArticle',
      component: () => import('@/components/personal/AddArticle.vue')
    }, {
      path: 'comment/:about(jyxd|fszd|english|politics|math|profession)',
      name: 'comment',
      component: () => import('@/components/personal/ShowTable.vue')
    }, {
      path: 'showArticle/:about(english|politics|math|profession)',
      name: 'showArticle',
      component: () => import('@/components/personal/showArticle/ShowArticle.vue'),
      redirect: '/personal/showArticle/english/fail',
      children: [
        {
          path: 'fail',
          name: 'showArticle',
          component: () => import('@/components/personal/showArticle/Fail.vue')
        },
        {
          path: 'success',
          name: 'showArticle',
          component: () => import('@/components/personal/showArticle/Success.vue')
        },
        {
          path: 'pedding',
          name: 'showArticle',
          component: () => import('@/components/personal/showArticle/Pedding.vue')
        }
      ]
    },
    {
      path: 'like/:about(jyxd|fszd|english|politics|math|profession)',
      name: 'like',
      component: () => import('@/components/personal/ShowTable.vue')
    }
  ]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {//添加导航守卫
  if (to.path == '/login' || to.path == '/register' || to.path == '/') {
    next();
  } else {
    const token = localStorage.getItem('token');
    
    if (token) {
      next();
    } else {
      Vue.prototype.$showMessage('您还没有权限，请先登录', 'error');
      setTimeout(() => {
        location.href = '/login'
      }, 1000);
    }


  }

});
export default router