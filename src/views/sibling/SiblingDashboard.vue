<template>
  <section class="flex">
    <div
      class="flex flex-col fixed right-0 text-white bg-violet-600 h-screen w-[50px] lg:w-[250px] py-4 px-0 transition-all delay-100">
      <div class="mb-3">
        <h1 class="mt-3 text-3xl hidden lg:block">MyKinder</h1>
      </div>
      <ul class="w-full text-start p-0">
        <li class="flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-violet-700">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="ph:student-fill" width="35px" />
          <p class="self-center m-0 font-light text-md hidden lg:block w-full">Mohamed Moustaghfir</p>
        </li>
        <li class="cursor-pointer flex ps-0 py-2 lg:ps-4 lg:py-2 align-middle hover:bg-red-600" @click="logout()">
          <Icon class="mx-auto lg:mx-0 lg:w-1/4" icon="material-symbols:logout" width="35px" color="white" />
          <p class="self-center m-0 font-light text-lg hidden lg:block w-3/4">Logout</p>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <div class="w-admin-resposive lg:w-admin-full-width bg-white min-h-screen">
      <div class="p-5 grid lg:grid-cols-2 gap-3">
        <Kid :children="childrens" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import router from '@/router/router'
import { Icon } from '@iconify/vue'
import Kid from '../../components/Kid.vue'
export default {
  data() {
    return {
      token: '',
      headers: '',
      childrens: null,
      id: null
    }
  },
  components: {
    Icon,
    Kid
  },
  methods: {
    logoutAlert() {
      this.$swal({
        title: 'Success',
        text: 'Loged Out Successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      });
    },
    async logout() {
      await axios.post('http://127.0.0.1:8000/api/logout', {}, { headers: this.headers })
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      this.logoutAlert()
      router.push('../../login')
    },
    async fetch() {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/siblings/' + this.id, { headers: this.headers })
        this.childrens = res.data.children
        console.log(res)
      } catch(e) {
        console.log(e)
      }
    }
  },
  async mounted() {
    this.token = localStorage.getItem('token')
    this.headers = { Authorization: `Bearer ${this.token}` }
    this.id = localStorage.getItem('id')
    await this.fetch()
  }
}
</script>