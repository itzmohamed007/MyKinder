<template>
  <section class="flex">
    <div class="flex flex-col fixed left-0 text-white bg-blue-950 h-screen min-w-[250px] py-4 px-0">
      <div class="mb-3">
        <h1 class="mt-3 text-3xl">MyKinder</h1>
      </div>
      <div class="">
        <ul class="w-full text-start p-0">
          <li class="flex ps-4 py-2 align-middle">
            <Icon class="me-3" icon="material-symbols:meeting-room-outline" width="35px"/>
            <p class="self-center m-0 font-light text-lg">Classes</p>
          </li>
          <li class="flex ps-4 py-2 align-middle">
            <Icon class="me-3" icon="ph:chalkboard-teacher" width="35px"/>
            <p class="self-center m-0 font-light text-lg">Teachers</p>
          </li>
          <li class="flex ps-4 py-2 align-middle">
            <Icon class="me-3" icon="ph:student-fill" width="35px"/>
            <p class="self-center m-0 font-light text-lg">Students</p>
          </li>
          <li class="flex ps-4 py-2 align-middle">
            <Icon class="me-3" icon="ri:parent-line"  width="35px"/>
            <p class="self-center m-0 font-light text-lg">Parents</p>
          </li>
        </ul>
      </div>
    </div>

  </section>  
</template>

<style scoped>
li:hover {
  background-color: rgb(90, 82, 132);
}
li:active {
  background-color: rgb(201, 190, 255);
}
</style>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon
  }
}
</script>
