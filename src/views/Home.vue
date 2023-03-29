<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="hero container d-flex">
    <div class="h-100 w-50 mx-5 d-flex flex-column justify-content-center text-start text-black">
      <h1 class="fw-bold mb-3">Making Kindergarten Management More Human!</h1>
      <p class="fs-6 fw-light"> Our system is designed to help administrators and professors to 
        manage children's education and development ...</p>
        <div class="mb-4">
          <div class="d-flex align-items-center">
            <Icon icon="material-symbols:check-circle-outline-rounded" color="lavender" width="25" height="25"/>
            <p class="ms-2 mb-0 fw-bold">user-friendly interface</p>
          </div>
          <div class="d-flex align-items-center">
            <Icon icon="material-symbols:check-circle-outline-rounded" color="lavender" width="25" height="25"/>
            <p class="ms-2 mb-0 fw-bold">simplified tasks management</p>
          </div>
        </div>
      <div class="d-flex gap-2">
        <button class="btn px-5 py-2 bg-black text-white">Login</button>
        <button class="explore btn px-5 py-2">Explore</button>
      </div>
    </div>
    <div class="align-self-center me-5">
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  background-color: rgb(255, 255, 255);
}
.hero h1 {
  font-size: 2.8rem !important;
}
.explore {
  border: 2px solid black;
  color: rgb(0, 0, 0);
}
.explore:hover {
  border: 2px solid black!important;
}
img {
  width: 500px;
}
</style>