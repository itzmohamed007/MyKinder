<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="hero d-grid align-items-center">
    <div class="container">
      <div class="inner-container rounded-4 py-5">
        <h1 class="fs-2 fw-bold mb-5">Login</h1>
        <form class="w-75">
          <div class="d-flex align-items-between">
            <input class="border-0 " type="email" placeholder="Email">
            <Icon class="my-auto" icon="material-symbols:mail-rounded" color="black" width="30" height="30"/>
          </div>
          <hr class="w-100 rounded mb-5 mt-0">
          <div class="d-flex align-items-between">
            <input class="border-0 " type="password" placeholder="Password">
            <Icon class="my-auto" icon="material-symbols:lock" color="black" width="30" height="30"/>
          </div>
          <hr class="w-100 rounded mb-5 mt-0">
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
input::placeholder {
  color: black;
}
input:focus {
  outline: none;
  border: none;
}
input {
  width: 100%;
  padding: 0.375rem 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  transition: .5s ease-in-out;
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
  width: 30%;
}
.inner-container {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7px);
  margin: 0 auto;
  width: 100%;
  border: 2px solid white;
}
@media (max-width: 765px) {
  .hero {
    padding: 0;
  }
  .container {
  width: 90%;
  }
}

</style>