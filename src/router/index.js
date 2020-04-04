import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import verify from '@/api/verify'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/error',
  name: "error",
  component: () => import('@/views/NotFound.vue')
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
  path: '/articlelist/:about(jyxd|fszd|english|politics|math|profession)',
  name: 'article',
  component: () => import('@/views/ArticleList.vue')
},
{
  path: '/search',
  name: "search",
  component: () => import("@/views/SearchResult.vue")
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

router.beforeEach(async (to, from, next) => {//添加导航守卫
  if (to.path == '/login' || to.path == '/register' || to.path == '/') {
    next();
  } else {
    const token = localStorage.getItem('token');
    if (token) {
      const result = await verify();
      if (result.message === "ok") {
        next();
        return;
      } else {
        Vue.prototype.$showMessage(result.message, 'error');
        setTimeout(() => {
          location.href = '/login'
        }, 1000);
      }
    }
    else {
      Vue.prototype.$showMessage('您还没有权限，请先登录', 'error');
      setTimeout(() => {
        location.href = '/login'
      }, 1000);
    }


  }

});
export default router