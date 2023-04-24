<template>
  <section class="flex">
    <div
      class="flex flex-col fixed right-0 text-white bg-violet-600 h-screen w-[50px] lg:w-[250px] py-4 px-0 transition-all delay-100">
      <div class="mb-3">
        <h1 class="mt-3 text-3xl hidden lg:block">MyKinder</h1>
      </div>
      <ul class="w-full text-start p-0">
        <li class="cursor-pointer flex ps-0 pe-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-violet-500"
          @click="updateTable('classes')" :class="{ 'selected': selectedTable === 'classes' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="material-symbols:meeting-room-outline" width="35px" />
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Classes</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-violet-500"
          @click="updateTable('teachers')" :class="{ 'selected': selectedTable === 'teachers' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:chalkboard-teacher" width="35px" />
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Teachers</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-violet-500"
          @click="updateTable('students')" :class="{ 'selected': selectedTable === 'students' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:student-fill" width="35px" />
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Students</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-violet-500"
          @click="updateTable('parents')" :class="{ 'selected': selectedTable === 'parents' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ri:parent-line" width="35px" />
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Parents</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-red-600" @click="logout()">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="material-symbols:logout" width="35px" color="white" />
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Logout</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="w-admin-resposive lg:w-admin-full-width">
    <Teachers @triger="fetch" v-if="selectedTable == 'teachers'" :teachers="teachers" />
    <Students @triger="fetch" v-if="selectedTable == 'students'" :students="students" />
    <Classrooms @triger="fetch" v-if="selectedTable == 'classes'" :classrooms="classrooms" />
    <Parents @triger="fetch" v-if="selectedTable == 'parents'" :siblings="siblings" />
  </section>
</template>

<style scoped>
.selected {
  background-color: rgb(176, 161, 253);
}
</style>

<script>
import axios from 'axios'
import { Icon } from "@iconify/vue"
import Teachers from '../../components/Teachers.vue'
import Students from '../../components/Students.vue'
import Classrooms from '../../components/Classrooms.vue'
import Parents from '../../components/Parents.vue'
import router from '@/router/router'

export default {
  data() {
    return {
      selectedTable: 'classes',
      classrooms: [],
      students: [],
      teachers: [],
      siblings: [],
      token: '',
      headers: ''
    }
  },
  components: {
    Icon,
    Teachers,
    Students,
    Classrooms,
    Parents
  },
  methods: {
    logoutAlert() {
      this.$swal({
        title: 'Success',
        text: 'Loged Out Successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      });
    },
    async logout() {
      console.log('trying to logot')
      console.log(this.headers)
      const res = await axios.post('http://127.0.0.1:8000/api/logout', {}, { headers: this.headers })
      console.log(res)
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      this.logoutAlert()
      router.push('../../login')
    },
    updateTable(option) {
      this.selectedTable = option
    },
    async fetch() {
      try {
        await axios.get('http://127.0.0.1:8000/api/global', { headers: this.headers })
          .then((response) => {
            this.classrooms = response.data.classrooms
            this.students = response.data.students
            this.teachers = response.data.teachers
            this.siblings = response.data.siblings
            console.log(response.data.students)
          })
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted() {
    this.token = localStorage.getItem('token')
    this.headers = { Authorization: `Bearer ${this.token}` }
    await this.fetch()
  }
}
</script>