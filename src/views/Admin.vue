<template>
  <section class="flex">
    <div class="flex flex-col fixed right-0 text-white bg-blue-950 h-screen w-[50px] lg:w-[250px] py-4 px-0 transition-all delay-100">
      <div class="mb-3">
        <h1 class="mt-3 text-3xl hidden lg:block">MyKinder</h1>
      </div>
      <ul class="w-full text-start p-0">
        <li class="flex ps-0 pe-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('classes')" :class="{ 'selected': selectedTable === 'classes' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="material-symbols:meeting-room-outline" width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Classes</p>
        </li>
        <li class="flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('teachers')" :class="{ 'selected': selectedTable === 'teachers' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:chalkboard-teacher" width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Teachers</p>
        </li>
        <li class="flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('students')" :class="{ 'selected': selectedTable === 'students' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:student-fill" width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Students</p>
        </li>
        <li class="flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('parents')" :class="{ 'selected': selectedTable === 'parents' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ri:parent-line"  width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Parents</p>
        </li>
      </ul>
      <!-- <div class="fixed bottom-0 flex items-center justify-center">
        <div class="relative">
          <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
      </div>
        <p class="m-0">Mohamed Bourra</p>
      </div> -->
    </div>
  </section>
  <section class="w-admin-resposive lg:w-admin-full-width">
    <Teachers v-if="selectedTable == 'teachers'"/>
    <Students v-if="selectedTable == 'students'"/>
    <Classrooms v-if="selectedTable == 'classes'"/>
    <Parents v-if="selectedTable == 'parents'"/>

  </section> 
</template>

<style scoped>
li:active {
  background-color: rgb(201, 190, 255);
}
.selected {
  background-color: rgb(201, 190, 255);
}
</style>

<script>
import { Icon }  from "@iconify/vue"
import Teachers from '../components/Teachers.vue'
import Students from '../components/Students.vue'
import Classrooms from '../components/Classrooms.vue'
import Parents from '../components/Parents.vue'

export default {
  data() {
    return {
      selectedTable: 'teachers'
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
    updateTable(option) {
      this.selectedTable = option
    },
  }
}
</script>
