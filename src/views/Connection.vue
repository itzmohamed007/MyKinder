<template>
    <section class="bg-login-page h-screen flex flex-col items-center justify-center p-5">
        <div class="w-full custom:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 shadow-2xl">
            <h1 class="text-login-page gap-20  mb-4 text-3xl font-normal">Login</h1>
            <p class="text-white bg-red-600 w-100 rounded-md">{{ auth_error }}</p>
            <div class="mt-12 md:mt-4">
                <input type="email" v-model="user.email" placeholder="Email"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-10  md:mt-8">
                <input type="password" v-model="user.password" placeholder="Password"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-10  md:mt-8">
                <input type="text" v-model="user.role" placeholder="Role"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-10  md:mt-8">
                <button type="button" @click="HandelLogin"
                    class="w-100 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white shadow-md pt-2 pb-2 rounded-full">Login</button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
                role: ''
            },
            auth_error: ''
        }
    },
    methods: {
        async HandelLogin() {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/login', this.user)
                this.auth_error = ''
                localStorage.setItem('token', res.data.token)
                switch (res.data.user.role) {
                    case 'admin':
                        router.push('../admin/dashboard')
                        break;
                    case 'teacher':
                        router.push('../teacher/dashboard')
                        break;
                    case 'sibling':
                        router.push('../sibling/dashboard')
                        break;
                }
            } catch (e) {
                console.log(e.response)
                switch (e.response.data.message) {
                    case 'Invalid Role':
                        this.auth_error = 'Invalid Role';
                        break;
                    case 'Invalid Creds':
                        this.auth_error = 'Invalid Creds';
                        break;
                }

            }
        }
    }
}
</script>