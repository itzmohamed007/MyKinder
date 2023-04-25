<template>
  <Status v-if="formV" @close="closeForm" :StudentId="studentToUpdate" @triger="fetch()" />
  <div class="text-start w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg border-violet-600 border-2"
  v-for="student in filteredStudents" :key="student.id">
    <div class="flex justify-center -mt-16 md:justify-end">
      <img class="object-cover w-20 h-20 border-2 border-violet-600 rounded-full" :src="student.image_url">
    </div>
    <p class="mt-2 text-md font-normal text-gray-800"><span class="font-bold">Name: </span>{{ student.name }}</p>
    <p class="mt-0 text-md font-normal text-gray-800"><span class="font-bold">Age: </span>{{ student.age }}years</p>
    <div class="mt-0 d-flex items-center">
      <p class="mb-0 text-md font-normal text-gray-800"><span class="font-bold">Status: </span></p>
      <Icon @click="updateHandle(student.id)" icon="tabler:edit" width="25" class="mx-2 cursor-pointer" />
    </div>
    <p class="mt-2 text-md font-normal text-gray-500 hide-scroll overflow-x-hidden overflow-y-scroll h-12">{{ student.status }}</p>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue"
import Status from '@/components/Status.vue'

export default {
  emits: ['newTriger'],
  data() {
    return {
      filteredStudents: [],
      formV: false,
      studentToUpdate: null
    }
  },
  components: {
    Icon,
    Status
  },
  props: {
    students: Array
  },
  mounted() {
    console.log(this.students)
  },
  methods: {
    updateHandle(id) {
      this.formV = true
      this.studentToUpdate = id
    },
    closeForm() {
      this.formV = false
    },
    fetch() {
      this.$emit('newTriger')
    }
  },
  watch: {
    students: {
      handler(newVal) {
        const teacher_id = localStorage.getItem('id')
        this.filteredStudents = newVal.filter(student => student.classroom.teacher.id === parseInt(teacher_id))
      },
      immediate: true
    }
  }
}
</script>

<style>
.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>