<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
      <span class="navbar-brand fw-bold">MyKinder</span>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
        aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
          <ul class="navbar-nav fw-bold align-items-center">
            <router-link class="nav-item rounded" to="/">Home</router-link>
            <router-link class="nav-item rounded" to="/">About</router-link>
            <router-link class="nav-item rounded" to="/">Contact</router-link>
            <router-link class="login nav-item rounded" to="/">Login</router-link>
          </ul>
        </div>
      </div>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav ul a {
  text-decoration: none;
  color: black;
  margin-inline: 5px 20px;
  transition: .3s ease-in-out;
}
nav ul a:hover {
  color: white; /* Add this line to change the text color on hover */
}
nav ul .login {
  border: 3px solid black;
  padding: 5px 20px;
}
nav ul .login:hover {
  background-color: black;
  color: white;
}
</style>
