<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <Navbar />
      <RouterView />

    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  h1 {
    color: crimson;
  }
  h2 {
    color: blue;
  }
</style>
