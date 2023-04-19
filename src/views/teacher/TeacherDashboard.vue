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
    </div>
  </section>
  <section>
    <div class="w-admin-resposive lg:w-admin-full-width min-h-screen">
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