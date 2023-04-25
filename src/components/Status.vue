<template>
  <div
    class=" transition-all duration-500 ease-in-out  fixed top-0 right-0 w-screen bg-opacity-50 backdrop-blur-sm h-screen bg-violet-600 d-flex flex-column items-center justify-center">
    <div class="w-50">
      <h1 class="mb-4 text-white">Update Status:</h1>
      <textarea v-model="status"
        class="w-100 focus:outline-none rounded-md h-50 p-3 hide-scroll resize-none placeholder:font-thin font-thin"></textarea>
      <button @click="updateHandle"
        class="bg-violet-600 text-white rounded-md focus:outline-none text-lg px-3 py-1 mt-4">Update</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      status: '',
      token: '',
      headers: ''
    }
  },
  props: {
    StudentId: null
  },
  methods: {
    async updateHandle() {
      try {
        console.log(this.status)
        const res = await axios.put('http://127.0.0.1:8000/api/status/' + this.StudentId, { 'status': this.status }, { headers: this.headers})
        this.$emit('triger')
        console.log(res)
      } catch(e) {
        console.log(e)
      }
      this.$emit('close')
    }
  },
  emits: ['triger', 'close'],
  mounted() {
    this.token = localStorage.getItem('token')
    this.headers = { Authorization: `Bearer ${this.token}` }
  }
}
</script>