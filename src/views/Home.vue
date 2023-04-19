<template>
  <section class="hero container d-flex align-items-center justify-content-center">
    <div class="hero-content h-100 w-50 mx-5 d-flex flex-column justify-content-center text-start text-black">
      <h1 class="fw-bold mb-3">Making Kindergarten Management More Human!</h1>
      <p class="fs-6 fw-light">
        Our system is designed to help administrators and professors to manage
        children's education and development ...
      </p>
      <div class="mini-features mb-4 d-flex flex-column">
        <div class="d-flex align-items-center">
          <Icon icon="material-symbols:check-circle-outline-rounded" color="DarkOrchid" width="25" height="25" />
          <p class="ms-2 mb-0 fw-bold">user-friendly interface</p>
        </div>
        <div class="d-flex align-items-center">
          <Icon icon="material-symbols:check-circle-outline-rounded" color="DarkOrchid" width="25" height="25" />
          <p class="ms-2 mb-0 fw-bold">simplified tasks management</p>
        </div>
      </div>
      <div class="buttons d-flex gap-2">
        <button class="login btn px-5 py-2 text-white" @click="login()">Login</button>
        <button class="explore btn px-5 py-2">Explore</button>
      </div>
    </div>
    <div class="hero-img align-self-center me-5">
      <img src="../assets/images/hero.png" alt="" />
    </div>
  </section>
  <section class="overview container d-flex gap-5">
    <div class="overview-text p-5 text-start w-50 d-flex flex-column justify-content-center">
      <h2 class="fw-bold mb-4">OverView</h2>
      <p class="fw-light">
        Our platform is designed to help administrators managing their school in
        terms of techers, students and classes, as well as helping professors
        check kid's education and development in a simple and efficient way. and
        for parents they can in any time enter the plateform to watch their
        children notes added by teachers.
      </p>
    </div>
    <div class="image-container w-50 align-self-center">
      <img src="../assets/images/overview.png" alt="" />
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
          <Icon class="my-4" icon="fluent-mdl2:task-manager-mirrored" color="darkorchid" width="40" height="40" />
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
        <button class="start btn rounded-0 text-white mt-5 px-4 fw-light mb-5">
          Start now
        </button>
      </div>
    </div>
  </section>
  <section class="feedback w-75 container d-flex flex-column align-items-center justify-content-center">
    <h3 class="fw-bold">Client Feedback</h3>
    <p class="fw-light mb-5">
      Here is a unit of one of our clients' feedback about the experience in our
      website
    </p>
    <div class="user-feedback d-flex gap-5 mt-3">
      <div class="big-quot w-50 p-3">
        <h3 class="fw-bold text-start">
          "School Managing Has Never Been Easier Before!"
        </h3>
      </div>
      <div class="small-quot w-50 d-flex flex-column align-items-center justify-content-center">
        <p class="text-start fw-bold">
          I was suffering from exausting work every single day managing the
          whole school, but no anymore!
        </p>
        <div class="quot-teller d-flex align-self-start mt-3 justify-content-center align-items-center">
          <img src="../assets/images/director.png" alt="" />
          <div class="administrator ms-3">
            <h4 class="fw-bold fs-6 text-start">Mohamed Moustaghfir</h4>
            <p class="">Champions Kindergartens Director</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="container p-5  mb-5">
    <div class="text-start">
      <h4 class="footer-title fs-2 fw-bold mb-4">MyKinder</h4>
      <p class="fw-light mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos consequatur tempore
        aspernatur aliquam fuga iste!
      </p>
      <div class="d-flex gap-2 mb-4">
        <Icon icon="ic:baseline-facebook" width="35" color="darkorchid" />
        <Icon icon="ri:instagram-fill" width="35" color="darkorchid" />
        <Icon icon="carbon:logo-linkedin" width="35" color="darkorchid" />
        <Icon icon="ant-design:twitter-square-filled" width="35" color="darkorchid" />
      </div>
    </div>
    <div class="text-start ms-5">
      <h4 class="fw-bold fs-5">Company</h4>
      <p class="mb-0">lorem</p>
      <p class="mb-0">epsum</p>
      <p class="mb-0">dolor</p>
    </div>
    <div class="text-start ms-5">
      <h4 class="fw-bold fs-5">Support</h4>
      <p class="mb-0">lorem</p>
      <p class="mb-0">epsum</p>
      <p class="mb-0">dolor</p>
      <p class="mb-0">sit amet</p>
    </div>
    <div class="text-start ms-5">
      <h4 class="fw-bold fs-5">Support</h4>
      <p class="mb-0">New York, NY 10012, US</p>
      <p class="mb-0">info@gmail.com</p>
      <p class="mb-0">+ 01 234 567 88</p>
      <p class="mb-0">+ 02 345 678 99</p>
    </div>
  </footer>
</template>

<script>
import router from "../router";
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon
  },
  methods: {
    login() {
      router.push('/login')
    }
  }
}
</script>

<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 50vh;
}

.footer-title {
  color: darkorchid;
}

footer h4 {
  color: darkorchid;
}

footer p {
  font-weight: lighter !important;
}

.hero {
  min-height: 100vh;
  background-color: rgb(255, 255, 255);
}

.hero h1 {
  font-size: 2.8rem !important;
}

.login {
  background-color: #AA46BD;
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
  min-height: 100vh;
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
  transition: 0.5s ease-in-out;
}

.start:hover {
  background-color: rgb(170, 0, 255);
}

.why-choose-us {
  font-weight: lighter;
  color: rgb(177, 174, 174);
}

.feedback {
  min-height: 100vh;
}

.feedback h3 {
  font-size: 2rem;
}

.user-feedback {
  padding: 4rem;
  background-color: rgb(245, 227, 255);
}

.feedback img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
}

.administrator p {
  font-size: 0.8rem;
  text-align: start;
}

@media (max-width: 1000px) {
  .hero-img {
    margin: 0 !important;
  }

  .hero {
    flex-wrap: wrap;
  }

  .user-feedback {
    flex-wrap: wrap;
  }

  .overview {
    flex-wrap: wrap;
    gap: 0 !important;
    height: 50vh !important;
    margin: 0 0 !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 50rem;
  }

  .features {
    grid-template-columns: repeat(2, 1fr);
  }

  footer {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
}

@media (max-width: 765px) {
  .big-quot {
    width: 100% !important;
  }

  .big-quot h3 {
    text-align: center !important;
    font-size: 1.7rem !important;
  }

  .small-quot {
    width: 100% !important;
    text-align: center !important;
  }

  .quot-teller {
    align-items: center !important;
    justify-content: center !important;
  }

  .feedback {
    padding: 2rem !important;
  }

  .image-container {
    width: 100% !important;
  }

  /* .overview {
    gap: 0!important;
    height: 50vh!important;
    margin: 0 0!important;
    align-items: center!important;
    justify-content: center!important;
  } */
  .overview-text {
    width: 100% !important;
    text-align: center !important;
  }

  .mini-features {
    justify-content: center !important;
    align-items: center !important;
  }

  .buttons {
    justify-content: center;
  }

  .hero h1 {
    font-size: 2.3rem !important;
  }

  .hero-content {
    height: 90vh !important;
    text-align: center !important;
    gap: 30px !important;
    margin: 0 1rem !important;
  }

  .hero {
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    margin-top: 4rem !important;
  }

  .hero>div {
    width: 100% !important;
  }

  img {
    width: 380px;
    /* display: none; */
  }

  .features {
    grid-template-columns: repeat(1, 1fr);
  }

  footer {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    justify-content: start;
    margin: 0 0;
    padding: 1 !important;
  }

  footer>div {
    margin: 0 !important;
  }
}</style>