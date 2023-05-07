<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex justify-between">
      <div class="mt-8 text-center lg:text-start">
        <h1 class="text-3xl font-semibold text-gray-900">Teachers</h1>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <router-link to="/admin/teacher/create">
          <button type="button"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto cursor-pointer">Add
            teacher</button>
        </router-link>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="text-left min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Phone
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="teacher in teachers" :key="teacher.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">
                          {{ teacher.name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ teacher.email }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ teacher.phone }}</div>
                  </td>
                  <td class="flex justify-start py-4 px-3 text-right text-sm font-medium sm:pr-6 align-middle">
                    <Icon icon="tabler:edit" width="30" class="mx-2 cursor-pointer" @click="updateHandle(teacher.id)" />
                    <Icon icon="ic:round-delete-sweep" width="30" class="mx-2 cursor-pointer"
                      @click="deleteHandle(teacher.id)" />
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
import axios from "axios";
import { Icon } from "@iconify/vue"
import router from "@/router/router"

export default {
  data() {
    return {
      token: '',
      headers: ''
    }
  },
  mounted() {
    this.token = localStorage.getItem('token')
    this.headers = { Authorization: `Bearer ${this.token}` }
  },
  props: {
    teachers: Array,
  },
  components: {
    Icon,
  },
  methods: {
    successAlert() {
      this.$swal({
        title: 'Success',
        text: 'Teacher account deleted successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      });
    },
    updateHandle(id) {
      router.push('teacher/update/' + id)
    },
    async deleteHandle(id) {
      try {
        let response = await axios.delete("http://127.0.0.1:8000/api/teachers/" + id,
          { headers: this.headers },
        )
        this.successAlert()
        this.$emit("triger");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>