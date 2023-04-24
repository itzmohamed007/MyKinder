<template>
    <section class="bg-login-page min-h-screen flex flex-col items-center justify-center p-5">
        <div class="w-full custom:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 shadow-2xl">
            <h1 class="text-login-page gap-20  mb-4 text-3xl font-normal">Add Student</h1>
            <div class="mt-12 md:mt-4">
                <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.name }}</p>
                <input type="text" placeholder="Student Name" v-model="student.name"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-10 md:mt-6">
                <label class="block text-gray-400 text-start font-thin mb-1 ml-4">Student Image</label>
                <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.image }}</p>
                <input type="file" @change="onFileChange" class="block w-100 px-3 pt-2 pb-2 text-gray-400 font-thin bg-gradient-to-b from-gray-200 to-white rounded-full border-none file:bg-gradient-to-r file:from-fuchsia-400 file:to-purple-500 file:text-white file:text-sm file:px-4 file:py-2 file:border-none file:rounded-full placeholder-gray-400/70 
                focus:border-blue-400 focus:outline-none" />
            </div>
            <div class="mt-10 md:mt-6">
                <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.age }}</p>
                <input type="number" placeholder="Student Age" v-model="student.age"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-10 md:mt-6">
                <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.classroom_id }}</p>
                <select v-model="student.classroom_id"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                    <option selected hidden class=" text-white">Student Class</option>
                    <option v-for="classroom in classrooms" :value="classroom.id">{{ classroom.name }}</option>
                </select>
            </div>
            <div class="mt-10  md:mt-6">
                <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.sibling_id }}</p>
                <select v-model="student.sibling_id"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                    <option selected hidden class=" text-white">Student Sibling</option>
                    <option v-for="sibling in siblings" :value="sibling.id">{{ sibling.name }}</option>
                </select>
            </div>
            <div class="mt-10  md:mt-6">
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
import axios from 'axios'
import router from '@/router/router'


export default {
    data() {
        return {
            token: '',
            headers: '',
            student: {
                name: '',
                age: null,
                image: {},
                classroom_id: null,
                sibling_id: null
            },
            errors: {
                name: '',
                age: '',
                image: '',
                classroom_id: '',
                sibling_id: ''
            },
            classrooms: [],
            siblings: []
        }
    },
    methods: {
        successAlert() {
            this.$swal({
                title: 'Success',
                text: 'Student created successfully!',
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
        async submitHandle() {
            if (this.token == null) {
                this.authenticationAlert()
                router.push("/login");
            }

            const formData = new FormData();
            formData.append('name', this.student.name);
            formData.append('age', this.student.age);
            formData.append('classroom_id', this.student.classroom_id);
            formData.append('sibling_id', this.student.sibling_id);
            formData.append('image', this.student.image);
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/students', formData, { headers: this.headers })
                console.log(res)
                this.successAlert()
                router.push('/admin/dashboard')
            } catch (e) {
                console.log(e)
                if (e.response.status == 422) {
                    if (e.response.data.errors.hasOwnProperty("name")) {
                        this.errors.name = e.response.data.errors.name[0]
                    } else {
                        this.errors.name = ""
                    }
                    if (e.response.data.errors.hasOwnProperty("age")) {
                        this.errors.age = e.response.data.errors.age[0]
                    } else {
                        this.errors.age = ""
                    }
                    if (e.response.data.errors.hasOwnProperty("classroom_id")) {
                        this.errors.classroom_id = e.response.data.errors.classroom_id[0]
                    } else {
                        this.errors.classroom_id = ""
                    }
                    if (e.response.data.errors.hasOwnProperty("sibling_id")) {
                        this.errors.sibling_id = e.response.data.errors.sibling_id[0]
                    } else {
                        this.errors.sibling_id = ""
                    }
                    if (e.response.data.errors.hasOwnProperty("image")) {
                        this.errors.image = e.response.data.errors.image[0]
                    } else {
                        this.errors.image = ""
                    }
                } else if (e.response.status == 403) {
                    this.authorizationAlert()
                    localStorage.removeItem("token")
                    router.push("/login")
                }
            }
        },
        onFileChange(e) {
            console.log(this.student.image)
            this.student.image = e.target.files[0]
            console.log(this.student.image)
        },
        async fetch() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/students/data', { headers: this.headers })
                console.log(res)
                this.siblings = res.data.parents
                this.classrooms = res.data.classrooms
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
}
</script>