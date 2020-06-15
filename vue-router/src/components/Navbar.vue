<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-3">
    <div class="container">
      <router-link to="/" class="navbar-brand mb-0 h1">Vue Router</router-link>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/services" class="nav-link">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-link">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/education" class="nav-link">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/experience" class="nav-link">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/work" class="nav-link">Work</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
