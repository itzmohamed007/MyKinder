<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="hero d-grid align-items-center">
    <div class="container">
      <div class="inner-container bg-white rounded-4 p-5">
        <h1 class="fs-2 fw-bold mb-5">Login</h1>
        <form class="w-75">
          <div class="d-flex align-items-center">
            <input class="border-0 " type="email" placeholder="Email">
            <Icon class="mx-2" icon="material-symbols:mail-rounded" color="black" width="30" height="30"/>
          </div>
          <hr class="w-100 rounded mb-5">
          <div class="d-flex align-items-center">
            <input class="border-0 " type="password" placeholder="Password">
            <Icon class="mx-2" icon="material-symbols:lock" color="black" width="30" height="30"/>
          </div>
          <hr class="w-100 rounded mb-5">
          <button type="button" class="btn bg-black py-2 fs-5 text-white w-100">Login</button>
        </form>
      </div>
    </div>
  </section>
  
</template>

<style scoped>
.hero {
  padding: 5rem;
  height: 100vh;
  background: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
input:focus {
  outline: none!important;
  border: none!important;
}
input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
}
hr {
  height: 2px;
  border: none;
  background-color: black;
  opacity: 1;
}
form {
  margin-inline: auto;
}
.container {
  width: 40%;
}
</style>