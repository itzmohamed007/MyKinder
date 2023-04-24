<template>
  <div
    class=" transition-all duration-500 ease-in-out  fixed top-0 right-0 w-screen bg-opacity-50 backdrop-blur-sm h-screen bg-violet-600 d-flex flex-column items-center justify-center">
    <div class="w-50">
      <h1 class="mb-4 text-white">Update Status:</h1>
      <textarea class="w-100 focus:outline-none rounded-md h-50 p-3 hide-scroll resize-none placeholder:font-thin font-thin"></textarea>
      <button @click="updateHandle" class="bg-violet-600 text-white rounded-md focus:outline-none text-lg px-3 py-1 mt-4">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  updateHandle() {
    console.log('trhing')
    this.$emit('close')
    console.log('tryied')
  }
}
}
</script>