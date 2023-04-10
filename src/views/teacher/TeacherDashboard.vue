<template>
  <section class="flex">
    <div
      class="flex flex-col fixed right-0 text-white bg-violet-600 h-screen w-[50px] lg:w-[250px] py-4 px-0 transition-all delay-100">
      <div class="mb-3">
        <h1 class="mt-3 text-3xl hidden lg:block">MyKinder</h1>
      </div>
      <ul class="w-full text-start p-0">
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-violet-700">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:student-fill" width="35px" />
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Students</p>
        </li>
      </ul>
      <div class="fixed bottom-3 self-center">
        <div class="relative">
          <img class="object-cover w-12 h-12 rounded-full ring ring-gray-200"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
            alt="">
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0 ring-1 ring-white bottom-0"></span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="w-admin-resposive lg:w-admin-full-width bg-gradient-to-r from-lavender to-violet-600 min-h-screen">
      <div class="p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue'
import Card from '../../components/Card.vue'
export default {
  components: {
    Icon,
    Card
  }
}
</script>