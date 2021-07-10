import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
