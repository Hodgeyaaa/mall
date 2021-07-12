import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home'
import News from '../views/news/news'
// const Selected = () => import('../views/selected/selected')
// const Summer = () => import('../views/summer/summer')
// const Contact = () => import('../views/contact/contact')
import Selected from '../views/selected/selected'
import Summer from '../views/summer/summer'
import Contact from '../views/contact/contact'
import Cart from 'views/cart/cart'
import Detail from 'views/detail/detail'
import Login from 'views/login/login.vue'
import NoFind from 'views/noFind404/noFind'

const routes = [
  
    {
      path: '/',
      redirect: '/home'
      
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/selected',
      name: 'Selected',
      component: Selected
    },
    {
      path: '/summer',
      name: 'Summer',
      component: Summer
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/detail/:iid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/noFind',
      name: 'NoFind',
      component: NoFind
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  
 
]

const routerHistory = createWebHistory()
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  history: routerHistory,
  routes
})

export default router
