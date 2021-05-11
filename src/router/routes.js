const routes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "home" */ '@/views/index/index.vue'),
      },
      {
        path: 'information',
        name: 'information',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/index.vue'),
      },
      {
        path: 'tutorialClass',
        name: 'tutorialClass',
        component: () => import(/* webpackChunkName: "home" */ '@/views/tutorialClass/index.vue'),
        meta:{
          title: '辅导课堂'
        }
      },
      {
        path: 'testCenter',
        name: 'testCenter',
        component: () => import(/* webpackChunkName: "home" */ '@/views/testCenter/index.vue'),
        meta:{
          title: '试题中心'
        }
      },
      {
        path: 'aboutUs',
        name: 'aboutUs',
        component: () => import(/* webpackChunkName: "home" */ '@/views/aboutUs/index.vue'),
        meta:{
          title: '关于我们'
        }
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue')
  }
]
export default routes;