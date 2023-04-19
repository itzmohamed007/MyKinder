<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex justify-between">
      <div class="mt-8 text-center lg:text-start">
        <h1 class="text-3xl font-semibold text-gray-900">Students</h1>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <a href="/admin/student/create">
          <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent 
            bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet-600 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto 
            cursor-pointer">Add student</button>
        </a>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="text-left min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Age
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Class
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Teacher
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Operations
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="student in students" :key="student.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="student.image_url" alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ student.name }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-left text-gray-900">{{ student.age }} years</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span
                      class="text-left inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{
                        student.classroom.name }}</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-left text-gray-900">{{ student.teacher.name }}</div>
                  </td>
                  <td class="flex py-4 px-3 text-right text-sm font-medium sm:pr-6 align-middle">
                    <Icon icon="tabler:edit" width="30" class="mx-2 cursor-pointer" />
                    <Icon icon="ic:round-delete-sweep" width="30" class="mx-2 cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { Icon } from '@iconify/vue'
export default {
  props: {
    students: Array
  },
  components: {
    Icon
  }
}
</script>