<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="hero">
    <div class="form container rounded d-flex flex-column align-items-center justify-content-center">
      <h1 class="fs-2 fw-bold">Login</h1>
      <div class="input-container w-50 fs-6">
        <input class="input-field border-0" type="email" placeholder="Email" />
        <Icon class="mx-2" icon="material-symbols:mail-rounded" color="black" width="30" height="30"/>
        <hr>
      </div>
      <div class="input-container w-50 fs-6">
        <input class="input-field border-0" type="password" placeholder="Password"/>
        <Icon class="mx-2" icon="material-symbols:lock" color="black" width="30" height="30"/>
      </div>
      <button class="btn bg-dark text-white">Login</button>
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
.form {
  /* padding: 5rem 0; */
  opacity: 50;
  background-color: #fff;
}
</style>