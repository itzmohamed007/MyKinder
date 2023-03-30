import { createRouter, createWebHistory } from 'vue-router'
import Connection from '../views/Connection'
import Home from '../views/Home'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Connection
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router