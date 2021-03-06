import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const profile = () => import('../views/profile/profile')
const cart = () => import('../views/cart/cart')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/cart',
      component: cart,
    },
    {
      path: '/category',
      component: category,
    },
    {
      path: '/profile',
      component: profile,
    }
  ],
  mode: 'history'
})
