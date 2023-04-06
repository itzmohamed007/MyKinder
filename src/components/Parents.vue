<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex justify-between">
      <div class="mt-8 text-center lg:text-start">
        <h1 class="text-3xl font-semibold text-gray-900">Parents</h1>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-admin-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto cursor-pointer">Add
          parent</button>
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
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Child
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Operations
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="parent in parents" :key="parent.id">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ parent.name }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ parent.email }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ parent.child }}</div>
                  </td>
                  <td class="flex justify-start py-4 px-3 text-right text-sm font-medium sm:pr-6 align-middle">
                    <Icon icon="tabler:edit" width="30" class="mx-2 cursor-pointer"/>
                    <Icon icon="ic:round-delete-sweep" width="30"  class="mx-2 cursor-pointer"/>
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
const parents = [
  {
    name: 'Abdelaziz Bourra',
    email: 'abdeaziz@gmail.com',
    child: 'Ayoub Iboban',
  },
  {
    name: 'Ahmed Moustaghfir',
    email: 'ahmed@gmail.com',
    child: 'najoua behaj',
  },
]

import { Icon } from '@iconify/vue'
export default {
  setup() {
    return {
      parents,
    }
  },
  components: {
    Icon
  }
}
</script>