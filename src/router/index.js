
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/issue',
    name: 'issue',
    component: () => import('../views/issue.vue')
  },
  {
    path: '/author',
    name: 'author',
    component: () => import('../views/author.vue')
  },
  {
    path: '/books/:id',
    name: 'BookEdit',
    component: () => import('../views/BookEdit.vue')
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import( '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
