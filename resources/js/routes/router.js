import Vue from 'vue'
import VueRouter from 'vue-router'
import * as routes from './async-routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    components: {
      default: () => import('../layouts/public/PublicLayout')
    },
    children: [
      {
        path: '/',
        name: 'home.index',
        component: routes.Home
      }
    ]
  }]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
