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
        path: 'hot',
        name: 'hot',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/hot.vue'),
      },
      {
        path: 'hotd',
        name: 'hotd',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/hotd.vue'),
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/notice.vue'),
      },
      {
        path: 'noticed',
        name: 'noticed',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/noticed.vue'),
      },
      {
        path: 'preparation',
        name: 'preparation',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/preparation.vue'),
      },
      {
        path: 'preparationd',
        name: 'preparationd',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/preparationd.vue'),
      },
      {
        path: 'plan',
        name: 'plan',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/plan.vue'),
      },
      {
        path: 'pland',
        name: 'pland',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/pland.vue'),
      },
      {
        path: 'universities',
        name: 'universities',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/universities.vue'),
      },
      {
        path: 'universitiesd',
        name: 'universitiesd',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/universitiesd.vue'),
      },
      {
        path: 'major',
        name: 'major',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/major.vue'),
      },
      {
        path: 'majord',
        name: 'majord',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/majord.vue'),
      },
      {
        path: 'subjectType',
        name: 'subjectType',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/subjectType.vue'),
      },
      {
        path: 'subjectTyped',
        name: 'subjectTyped',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/subjectTyped.vue'),
      },
      {
        path: 'tutorialClass',
        name: 'tutorialClass',
        component: () => import(/* webpackChunkName: "home" */ '@/views/tutorialClass/index.vue'),
        meta: {
          title: '辅导课堂'
        }
      },
      {
        path: 'testCenter',
        name: 'testCenter',
        component: () => import(/* webpackChunkName: "home" */ '@/views/testCenter/index.vue'),
        meta: {
          title: '试题中心'
        }
      },
      {
        path: 'testCenterd',
        name: 'testCenterd',
        component: () => import(/* webpackChunkName: "home" */ '@/views/testCenter/testCenterd.vue'),
        meta: {
          title: '试题中心'
        }
      },
      {
        path: 'aboutUs',
        name: 'aboutUs',
        component: () => import(/* webpackChunkName: "home" */ '@/views/aboutUs/index.vue'),
        meta: {
          title: '关于我们'
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/admin.vue'),
    children: [
      {
        path: 'admintest',
        name: 'admintest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/test.vue'),
      },
      {
        path: 'adminaddtest',
        name: 'adminaddtest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/adminaddtest.vue'),
      },
      {
        path: 'adminpaln',
        name: 'adminpaln',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminpaln/index.vue'),
      },
      {
        path: 'adminAddPaln',
        name: 'adminAddPaln',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminpaln/adminAddPaln.vue'),
      },
      {
        path: 'adminuniversities',
        name: 'adminuniversities',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminuniversities/index.vue'),
      },
      {
        path: 'adminAddUniversities',
        name: 'adminAddUniversities',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminuniversities/adminAddUniversities.vue'),
      },
      {
        path: 'adminmajor',
        name: 'adminmajor',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminmajor/index.vue'),
      },
      {
        path: 'adminAddMajor',
        name: 'adminAddMajor',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminmajor/adminAddMajor.vue'),
      },
      {
        path: 'admincar',
        name: 'admincar',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admincar/index.vue'),
      },
      {
        path: 'adminAddCcar',
        name: 'adminAddCcar',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admincar/adminAddCcar.vue'),
      },
      {
        path: 'adminmajortest',
        name: 'adminmajortest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminmajortest/index.vue'),
      },
      {
        path: 'specializedTraining',
        name: 'specializedTraining',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/specializedTraining/index.vue'),
      },
      {
        path: 'addspecializedTraining',
        name: 'addspecializedTraining',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/specializedTraining/addSpecialiZedtraining.vue'),
      },


      {
        path: 'themeYear',
        name: 'themeYear',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/themeYear/index.vue'),
      },
      {
        path: 'addthemeYear',
        name: 'addthemeYear',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/themeYear/addthemeYear.vue'),
      },
      {
        path: 'simulationTest',
        name: 'simulationTest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/simulationTest/index.vue'),
      },
      {
        path: 'addsimulationTest',
        name: 'addsimulationTest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/simulationTest/addsimulationTest.vue'),
      },
      {
        path: 'examination',
        name: 'examination',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/examination/index.vue'),
      },
      {
        path: 'addexamination',
        name: 'addexamination',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/examination/addexamination.vue'),
      }
    ]
  },
  {
    path: '/personalizedEvaluation',
    name: 'personalizedEvaluation',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/personalizedEvaluation/index.vue'),
    meta: {
      title: '个性化测评'
    }
  },
  {
    path: '/diagnosisReport',
    name: 'diagnosisReport',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/diagnosisReport/index.vue'),
    meta: {
      title: '诊断报告'
    }
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "home" */ '@/notFound.vue')
  }
]
export default routes;