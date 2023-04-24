import { createRouter, createWebHistory } from 'vue-router'
const ParentUpdate = () => import('@/views/admin/parents/UpdateParent.vue')
const AdminDashboard = () => import('@/views/admin/AdminDashboard.vue')
const Connection = () => import('@/views/Connection.vue')
const Home = () => import('@/views/Home.vue')
const AddClass = () => import('@/views/admin/classrooms/AddClass.vue')
const UpdateClass = () => import('@/views/admin/classrooms/UpdateClass.vue')
const AddStudent = () => import('@/views/admin/students/AddStudent.vue')
const UpdateStudent = () => import('@/views/admin/students/UpdateStudent.vue')
const AddTeacher = () => import('@/views/admin/teachers/AddTeacher.vue')
const UpdateTeacher = () => import('@/views/admin/teachers/UpdateTeacher.vue')
const AddParent = () => import('@/views/admin/parents/AddParent.vue')
const TeacherDashboard = () => import('@/views/teacher/TeacherDashboard.vue')
const SiblingDashboard = () => import('@/views/sibling/SiblingDashboard.vue')

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
    path: '/admin/classroom/create',
    name: 'ClassCreate',
    component: AddClass
  },
  {
    path: '/admin/classroom/update/:id',
    name: 'ClassUpdate',
    component: UpdateClass
  },
  {
    path: '/admin/student/create',
    name: 'StudentCreate',
    component: AddStudent
  },
  {
    path: '/admin/student/update/:id',
    name: 'StudentUpdate',
    component: UpdateStudent
  },
  {
    path: '/admin/teacher/create',
    name: 'TeacherCreate',
    component: AddTeacher
  },
  {
    path: '/admin/teacher/update/:id',
    name: 'TeacherUpdate',
    component: UpdateTeacher
  },
  {
    path: '/admin/parent/create',
    name: 'ParentCreate',
    component: AddParent
  },
  {
    path: '/admin/parent/update/:id',
    name: 'ParentUpdate',
    component: ParentUpdate
  },
  {
    path: '/teacher/dashboard',
    name: 'TeacherDashboard',
    component: TeacherDashboard
  },
  {
    path: '/sibling/dashboard',
    name: 'SiblingDashboard',
    component: SiblingDashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
