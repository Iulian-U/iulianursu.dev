<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/App/Navbar.vue";
import Particles from "./components/Plugins/Particles.vue";
</script>

<template>
  <div class="wrapper">
    <Particles />
    <div class="nav">
      <Navbar />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.nav {
  @apply fixed w-[calc(100vw-1.5rem)] top-0  z-20;
}
</style>
