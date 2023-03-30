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
  <section class="why-us container-fluid d-flex flex-column justify-content-center bg-black">
    <div class="text-white">
      <h2 class="mt-5">Why Choose Us?</h2>
      <p class="why-choose-us mb-5">
        Our website give a varity of features that can help you managing your
        kindergarten with less efforts possible
      </p>
    </div>
    <div class="container">
      <div class="features">
        <div class="card d-flex flex-column align-items-center">
          <Icon class="my-4" icon="fluent-mdl2:task-manager-mirrored" color="darkorchid" width="40" height="40"/>
          <h3 class="mb-3">Class Management</h3>
          <p class="mb-4">
            This feature would allow administrators and teachers to manage
            classes, including adding or removing students, updating student
            information, and assigning teachers to classes.
          </p>
        </div>
        <div class="card d-flex flex-column align-items-center">
          <Icon class="my-4" icon="fluent-mdl2:diet-plan-notebook" color="darkorchid" width="40" height="40" />
          <h3 class="mb-3">Activity Planning</h3>
          <p class="mb-4">
            This feature would allow teachers to create and schedule activities
            for their classes, so that there will be no static activities for
            all of the year.
          </p>
        </div>
        <div class="card d-flex flex-column align-items-center">
          <Icon class="my-4" icon="fluent-mdl2:issue-tracking" color="darkorchid" width="40" height="40" />
          <h3 class="mb-3">Students Tracking</h3>
          <p class="mb-4">
            This feature would allow teachers to track student progress and
            performance, using our notes system, the teachers will be capable to
            give some comments to each children based on their progress.
          </p>
        </div>
        <div class="card d-flex flex-column align-items-center">
          <Icon class="my-4" icon="ion:create-outline" color="darkorchid" width="40" height="40" />
          <h3 class="mb-3">Accounts Creation</h3>
          <p class="mb-4">
            Using this feature, The administrator will be capable to give access
            to every teacher or parent so that they can enter and do what they
            can do in your kindergarten
          </p>
        </div>
      </div>
      <div>
        <button class="start btn rounded-0 text-white mt-5 px-4 fw-light">Start now</button>
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
  min-height: 100vh;
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
  padding: 20px;
  border-radius: 0 !important;
  background-color: rgb(245, 238, 238);
}
.card h3 {
  font-size: 1rem;
  font-weight: bold;
}
.card p {
  font-size: 0.7rem;
  font-weight: lighter;
}
.why-us h2 {
  font-size: 2.5rem;
}
.start {
  background-color: DarkOrchid;
  transition: .5s ease-in-out;
}
.start:hover {
  background-color: rgb(170, 0, 255);
}
.why-choose-us {
  font-weight: lighter;
  color: rgb(177, 174, 174);
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