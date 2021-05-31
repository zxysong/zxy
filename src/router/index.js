import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  if (to.path.includes('/home')) {
    next();
  } else if (to.path.includes('/admin')) {
    let token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
})
export default router
