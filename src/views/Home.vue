<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="hero container d-flex">
    <div
      class="h-100 w-50 mx-5 d-flex flex-column justify-content-center text-start text-black"
    >
      <h1 class="fw-bold mb-3">Making Kindergarten Management More Human!</h1>
      <p class="fs-6 fw-light">
        Our system is designed to help administrators and professors to manage
        children's education and development ...
      </p>
      <div class="mb-4">
        <div class="d-flex align-items-center">
          <Icon
            icon="material-symbols:check-circle-outline-rounded"
            color="DarkOrchid"
            width="25"
            height="25"
          />
          <p class="ms-2 mb-0 fw-bold">user-friendly interface</p>
        </div>
        <div class="d-flex align-items-center">
          <Icon
            icon="material-symbols:check-circle-outline-rounded"
            color="DarkOrchid"
            width="25"
            height="25"
          />
          <p class="ms-2 mb-0 fw-bold">simplified tasks management</p>
        </div>
      </div>
      <div class="d-flex gap-2">
        <button class="login btn px-5 py-2 text-white">Login</button>
        <button class="explore btn px-5 py-2">Explore</button>
      </div>
    </div>
    <div class="align-self-center me-5">
      <img src="../assets/hero.png" alt="" />
    </div>
  </section>
  <section class="overview container d-flex gap-5">
    <div class="text-start w-50 d-flex flex-column justify-content-center">
      <h2 class="fw-bold mb-4">OverView</h2>
      <p class="fw-light">
        Our platform is designed to help administrators managing their school in
        terms of techers, students and classes, as well as helping professors
        check kid's education and development in a simple and efficient way. and
        for parents they can in any time enter the plateform to watch their
        children notes added by teachers.
      </p>
    </div>
    <div class="w-50 align-self-center">
      <img src="../assets/overview.png" alt="" />
    </div>
  </section>
  <section class="why-us container d-flex flex-column justify-content-center">
    <h2>Why Choose Us?</h2>
    <div class="container">
      <div class="features">
        <div class="card">
          <h2>Feature 1</h2>
          <p>Description of Feature 1</p>
        </div>
        <div class="card">
          <h2>Feature 2</h2>
          <p>Description of Feature 2</p>
        </div>
        <div class="card">
          <h2>Feature 3</h2>
          <p>Description of Feature 3</p>
        </div>
        <div class="card">
          <h2>Feature 4</h2>
          <p>Description of Feature 4</p>
        </div>
      </div>
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
.login {
  background-color: blueviolet;
}
.login:hover {
  background-color: black;
}
.explore {
  border: 2px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}
.explore:hover {
  border: 2px solid black !important;
}
img {
  width: 450px;
}
.overview {
  height: 100vh;
}
.overview h2 {
  font-size: 3rem !important;
}
.overview p {
  font-size: 0.9rem;
}
.why-us {
  height: 100vh;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1000px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 765px) {
  .features {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>