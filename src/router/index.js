import { createRouter, createWebHistory } from 'vue-router'
import Connection from '../views/Connection.vue'
import Home from '../views/Home.vue'
import AdminDashboard from '../views/admin/Dashboard.vue'
import NewClass from '../views/admin/NewClass.vue'

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
  },
  {
    path: '/admin/dashboard',
    name: 'admin',
    component: AdminDashboard
  },
  {
    path: '/admin/class/create',
    name: 'class',
    component: NewClass
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router