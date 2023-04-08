import { createRouter, createWebHistory } from 'vue-router'
import Connection from '../views/Connection.vue'
import Home from '../views/Home.vue'
import AdminDashboard from '../views/admin/Dashboard.vue'
import AddClass from '../views/admin/classes/AddClass.vue'
import UpdateClass from '../views/admin/classes/UpdateClass.vue'
import AddStudent from '../views/admin/students/AddStudent.vue'
import UpdateStudent from '../views/admin/students/UpdateStudent.vue'
import AddTeacher from '../views/admin/teachers/AddTeacher.vue'
import UpdateTeacher from '../views/admin/teachers/UpdateTeacher.vue'

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
    name: 'ClassCreate',
    component: AddClass
  },
  {
    path: '/admin/class/update',
    name: 'ClassUpdate',
    component: UpdateClass
  },
  {
    path: '/admin/student/create',
    name: 'StudentCreate',
    component: AddStudent
  },
  {
    path: '/admin/student/update',
    name: 'StudentUpdate',
    component: UpdateStudent
  },
  {
    path: '/admin/teacher/create',
    name: 'TeacherCreate',
    component: AddTeacher
  },
  {
    path: '/admin/teacher/update',
    name: 'TeacherUpdate',
    component: UpdateTeacher
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router