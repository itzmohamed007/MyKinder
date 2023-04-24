<template>
    <section class="bg-login-page h-screen flex flex-col items-center justify-center p-5">
        <div class="w-full custom:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 shadow-2xl">
            <h1 class="text-login-page gap-20  mb-4 text-3xl font-normal">Add Class</h1>
            <div class="mt-12 md:mt-4">
                <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.name }}</p>
                <input type="text" placeholder="Enter Class Name" v-model="classroom.name"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-2 md:mt-2">
                <label class="text-gray-400 font-thin">Enter Teacher's Name</label>
                <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.teacher_id }}</p>
                <select
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2"
                    v-model="classroom.teacher_id">
                    <option selected hidden class=" text-black">Classroom Teacher</option>
                    <option v-for="teacher in availableTeachers" :value="teacher.id">{{ teacher.name }}</option>
                </select>
            </div>
            <div class="mt-10  md:mt-8">
                <button type="button" @click="submitHandle"
                    class="w-100 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white shadow-md pt-2 pb-2 rounded-full">Create</button>
            </div>
            <a href="../../admin/dashboard" class=" decoration-transparent">
                <p class="w-100 text-start mt-2">Return To Dashboard</p>
            </a>
        </div>
    </section>
</template>

<script>
import Swal from 'sweetalert2'
import router from '@/router/router'
import axios from 'axios'

export default {
    data() {
        return {
            token: '',
            headers: '',
            classroom: {
                name: "",
                teacher_id: ''
            },
            availableTeachers: [],
            errors: {
                name: "",
                teacher_id: "",
            },
        };
    },
    methods: {
        successAlert() {
            this.$swal({
                title: 'Success',
                text: 'Classroom created successfully',
                icon: 'success',
                confirmButtonText: 'ok'
            });
        },
        authenticationAlert() {
            this.$swal({
                title: 'Error',
                text: 'You Are Not Authenticated',
                icon: 'warning',
                confirmButtonText: 'Login'
            });
        },
        authorizationAlert() {
            this.$swal({
                title: 'Error',
                text: 'You Are Not Allowed To Access This Page',
                icon: 'error',
                confirmButtonText: 'Connect'
            });
        },
        teachersAlert() {
            this.$swal({
                title: 'Error',
                text: 'There are no available teachers!',
                icon: 'warning',
                confirmButtonText: 'Ok'
            });
        },
        async submitHandle() {
            if (this.token == null) {
                this.authenticationAlert()
                router.push("/login");
            }
            try {
                const res = await axios.post("http://127.0.0.1:8000/api/classrooms", this.classroom, { headers: this.headers });
                console.log(res);
                this.successAlert()
                router.push("/admin/dashboard");
            } catch (e) {
                console.log(e);
                if (e.response.status == 422) {
                    if (e.response.data.errors.hasOwnProperty("name")) {
                        this.errors.name = e.response.data.errors.name[0];
                    } else {
                        this.errors.name = "";
                    }
                    if (e.response.data.errors.hasOwnProperty("teacher_id")) {
                        this.errors.teacher_id = e.response.data.errors.teacher_id[0];
                    } else {
                        this.errors.teacher_id = "";
                    }
                } else if (e.response.status == 403) {
                    this.authorizationAlert()
                    localStorage.removeItem("token");
                    router.push("/login");
                }
            }
        },
        async fetch() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/teachers/available', { headers: this.headers })
                if (res.data.length == 0) {
                    this.teachersAlert()
                    router.push('../teacher/create')
                }
                this.availableTeachers = res.data
                console.log(this.availableTeachers)
            } catch (e) {
                console.log(e)
            }
        }
    },
    async mounted() {
        this.token = localStorage.getItem('token')
        this.headers = { Authorization: `Bearer ${this.token}` }
        await this.fetch()
    }
};
</script>