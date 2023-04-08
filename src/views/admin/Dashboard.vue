<template>
  <img src="https://unsplash.com/fr/photos/ZHvM3XIOHoE" alt="">
  <section class="flex">
    <div class="flex flex-col fixed right-0 text-white bg-blue-950 h-screen w-[50px] lg:w-[250px] py-4 px-0 transition-all delay-100">
      <div class="mb-3">
        <h1 class="mt-3 text-3xl hidden lg:block">MyKinder</h1>
      </div>
      <ul class="w-full text-start p-0">
        <li class="cursor-pointer flex ps-0 pe-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('classes')" :class="{ 'selected': selectedTable === 'classes' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="material-symbols:meeting-room-outline" width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Classes</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('teachers')" :class="{ 'selected': selectedTable === 'teachers' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:chalkboard-teacher" width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Teachers</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('students')" :class="{ 'selected': selectedTable === 'students' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:student-fill" width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Students</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-admin-hover" @click="updateTable('parents')" :class="{ 'selected': selectedTable === 'parents' }">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ri:parent-line"  width="35px"/>
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Parents</p>
        </li>
      </ul>
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
.selected {
  background-color: rgb(201, 190, 255);
}
</style>

<script>
import { Icon }  from "@iconify/vue"
import Teachers from '../../components/Teachers.vue'
import Students from '../../components/Students.vue'
import Classrooms from '../../components/Classrooms.vue'
import Parents from '../../components/Parents.vue'

export default {
  data() {
    return {
      selectedTable: 'classes'
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
