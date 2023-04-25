<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex justify-between">
            <div class="mt-8 text-center lg:text-start">
                <h1 class="text-3xl font-semibold text-gray-900">Classes</h1>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <router-link to="/admin/classroom/create">
                    <button type="button"
                        class="inline-flex items-center justify-center rounded-md border border-transparent bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto cursor-pointer">Add
                        classroom</button>
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
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Students Count
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Teacher
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Operations
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="classroom in classrooms" :key="classroom.id">
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="text-gray-900">{{ classroom.name }}</div>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="text-gray-900">{{ classroom.students.length }}</div>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="text-gray-900">{{ classroom.teacher.name }}</div>
                                    </td>
                                    <td
                                        class="flex justify-start py-4 px-3 text-right text-sm font-medium sm:pr-6 align-middle">
                                        <Icon @click="updateHandle(classroom.id)" icon="tabler:edit" width="30"
                                            class="mx-2 cursor-pointer" />
                                        <Icon @click="deleteHandle(classroom.id)" icon="ic:round-delete-sweep" width="30"
                                            class="mx cursor-pointer" />
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
import router from '@/router/router';
import axios from 'axios'
import { Icon } from '@iconify/vue'

export default {
    data() {
        return {
            token: "",
            headers: "",
        };
    },
    mounted() {
        this.token = localStorage.getItem("token");
        this.headers = { Authorization: `Bearer ${this.token}` };
    },
    props: {
        classrooms: Array
    },
    components: {
        Icon
    },
    methods: {
        successAlert() {
            this.$swal({
                title: 'Success',
                text: 'Classroom deleted successfully',
                icon: 'success',
                confirmButtonText: 'ok'
            });
        },
        updateHandle(id) {
            router.push('classroom/update/' + id)
        },
        async deleteHandle(id) {
            try {
                let response = await axios.delete("http://127.0.0.1:8000/api/classrooms/" + id,
                    { headers: this.headers },
                );
                console.log(response)
                this.successAlert()
                this.$emit("triger");
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>