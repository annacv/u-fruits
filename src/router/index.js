import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Default from '../layouts/Default.vue'
import Product from '../layouts/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: Default },
    component: Home
  },
  {
    path: '/fruit/:id',
    name: 'FruitDetail',
    meta: { layout: Product },
    component: () => import('../views/FruitDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
