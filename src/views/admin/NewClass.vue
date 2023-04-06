<template>
  <section class="flex flex-col w-full md:w-1/2 mx-auto mt-5 p-10">
    <h1 class="font-bold mb-10">Add New ClassRoom</h1>
    <div class="bg-blue-950 p-10 rounded-lg">
      <div class="mb-8">
        <label class="block text-start text-md text-white">Name</label>
        <div class="relative flex items-center mt-2">
          <span class="pl-2 absolute">
            <Icon
              icon="material-symbols:text-select-move-forward-character-rounded"
              width="30"
            />
          </span>
          <input
            type="email"
            placeholder="Enter Classroom Name"
            class="block h-14 w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5"
          />
        </div>
      </div>
      <div class="mb-8">
        <label class="block text-start text-md text-white">Teacher</label>
        <div class="relative flex items-center mt-2">
          <span class="pl-2 absolute">
            <Icon
              icon="material-symbols:text-select-move-forward-character-rounded"
              width="30"
            />
          </span>
          <input
            type="email"
            placeholder="Enter Teacher's Name"
            class="block h-14 w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5"
          />
        </div>
      </div>
      <button
        type="button"
        class="px-6 py-2 font-bold tracking-wide text-blue-950 bg-blue-100 transition-all duration-300 rounded-lg hover:bg-blue-950 hover:text-white hover:outline-emerald-900"
      >
        Primary
      </button>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>
