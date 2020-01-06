<template>
  <div id="app">
    <Navbar />
    <main role="main" class="container">
      <div class="starter-template">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
  export default {
    name: 'app',
    components: {
      Navbar,
      Footer
    }
  }
</script>