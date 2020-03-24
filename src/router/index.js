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
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/Personal'),
    redirect: '/personal/commit/english',
    children: [
      {
        path: 'addartilce/:about(english|politics|math|profession)',
        name: 'addArtilce',
        component:()=>import('@/components/personal/AddArticle.vue')
      }, {
        path: 'commit/:about(jyxd|fszd|english|politics|math|profession)',
        name: 'commit',
        component:()=>import('@/components/personal/ShowTable.vue')
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
  if (to.path == '/login' || to.path == '/applyCount' || to.path == '/') {
    next();
  } else {
    let status = document.cookie.split(';');
    status = status.filter((ele) => {
      return ele.includes('status');
    });
    status.length ? status = status[0].split('=')[1] : status =  '';
    console.log(status)
    if(status == 200){
      next();
    }else{
      Vue.prototype.$showMessage('您还没有权限，请先登录','error');
      setTimeout(() => {
        location.href = '/login'

      }, 1000);
    }
    

  }

});
export default router