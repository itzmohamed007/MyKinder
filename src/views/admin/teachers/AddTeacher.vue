<template>
    <section class="bg-login-page min-h-screen flex flex-col items-center justify-center p-5">
        <div class="w-full custom:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 shadow-2xl">
            <form>
                <h1 class="text-login-page gap-20  mb-4 text-3xl font-normal">Add Teacher</h1>
                <div class="mt-12 md:mt-4">
                    <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.name }}</p>
                    <input type="text" placeholder="Teacher Name" v-model="teacher.name"
                        class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                </div>
                <div class="mt-10  md:mt-8">
                    <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.email }}</p>
                    <input type="email" placeholder="Teacher Email" v-model="teacher.email"
                        class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                </div>
                <div class="mt-10  md:mt-8">
                    <p class=" text-white bg-red-600 rounded-sm w-100">{{ errors.phone }}</p>
                    <input type="number" placeholder="Teacher Phone" v-model="teacher.phone"
                        class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                </div>
                <div class="mt-10  md:mt-8">
                    <button type="button" @click="submitHandle()"
                        class="w-100 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white shadow-md pt-2 pb-2 rounded-full">Create</button>
                </div>
                <router-link to="../../admin/dashboard" class="decoration-transparent">
                    <p class="w-100 text-start mt-2">Return To Dashboard</p>
                </router-link>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import router from '@/router/router'
export default {
    data() {
        return {
            teacher: {
                name: '',
                email: '',
                phone: ''
            },
            errors: {
                name: '',
                email: '',
                phone: ''
            },
            token: '',
            headers: ''
        }
    },
    methods: {
        successAlert() {
            this.$swal({
                title: 'Success',
                text: 'Teacher account created successfully',
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
                router.push('/login')
            }
            try {
                await axios.post('http://127.0.0.1:8000/api/teachers', this.teacher, { headers: this.headers })
                this.successAlert()
                router.push('/admin/dashboard')
            } catch (e) {
                console.log(e)
                if (e.response.status == 422) {
                    if (e.response.data.errors.hasOwnProperty('name')) {
                        this.errors.name = e.response.data.errors.name[0]
                    } else {
                        this.errors.name = ''
                    }
                    if (e.response.data.errors.hasOwnProperty('email')) {
                        this.errors.email = e.response.data.errors.email[0]
                    } else {
                        this.errors.email = ''
                    }
                    if (e.response.data.errors.hasOwnProperty('phone')) {
                        this.errors.phone = e.response.data.errors.phone[0]
                    } else {
                        this.errors.phone = ''
                    }
                } else if (e.response.status == 403) {
                    this.authorizationAlert()
                    localStorage.removeItem('token')
                    router.push('/login')
                }
            }
        },
    },
    mounted() {
        this.token = localStorage.getItem('token')
        this.headers = { Authorization: `Bearer ${this.token}` }
    }
}
</script>