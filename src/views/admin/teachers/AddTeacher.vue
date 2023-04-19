<template>
    <section class="bg-login-page min-h-screen flex flex-col items-center justify-center p-5">
        <div class="w-full custom:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 shadow-2xl">
            <form>
                <h1 class="text-login-page gap-20  mb-4 text-3xl font-normal">Add Teacher</h1>
                <div class="mt-12 md:mt-4">
                    <p class=" text-white bg-red-600 rounded-sm w-100">{{ name_error }}</p>
                    <input type="text" placeholder="Teacher Name" v-model="teacher.name"
                        class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                </div>
                <div class="mt-10  md:mt-8">
                    <p class=" text-white bg-red-600 rounded-sm w-100">{{ email_error }}</p>
                    <input type="email" placeholder="Teacher Email" v-model="teacher.email"
                        class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                </div>
                <div class="mt-10  md:mt-8">
                    <p class=" text-white bg-red-600 rounded-sm w-100">{{ phone_error }}</p>
                    <input type="number" placeholder="Teacher Phone" v-model="teacher.phone"
                        class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                </div>
                <div class="mt-10  md:mt-8">
                    <button type="button" @click="submitHandle()"
                        class="w-100 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white shadow-md pt-2 pb-2 rounded-full">Create</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import router from '@/router'
export default {
    data() {
        return {
            teacher: {
                name: '',
                email: '',
                phone: ''
            },
            name_error: '',
            email_error: '',
            phone_error: '',
            unauthorized: ''
        }
    },
    methods: {
        async submitHandle() {
            const token = localStorage.getItem('token')
            if (token == null) {
                alert('You Are Not Authenticated')
                router.push('/login')
            }
            let headers = { 'Authorization': `Bearer ${token}` }
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/teachers', this.teacher, { headers })
                console.log(res)
            } catch (e) {
                console.log(e)
                if (e.response.status == 422) {
                    if (e.response.data.errors.hasOwnProperty('name')) {
                        this.name_error = e.response.data.errors.name[0]
                    } else {
                        this.name_error = ''
                    }
                    if (e.response.data.errors.hasOwnProperty('email')) {
                        this.email_error = e.response.data.errors.email[0]
                    } else {
                        this.email_error = ''
                    }
                    if (e.response.data.errors.hasOwnProperty('phone')) {
                        this.phone_error = e.response.data.errors.phone[0]
                    } else {
                        this.phone_error = ''
                    }
                } else if(e.response.status == 403) {
                    alert('You Are Unauthorized To Access This Page, You Have To Re-Login')
                    localStorage.removeItem('token')
                    router.push('/login')
                }
            }
        },
    }
}
</script>