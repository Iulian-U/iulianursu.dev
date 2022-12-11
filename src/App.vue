<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/App/Navbar.vue";
import Particles from "./components/Plugins/Particles.vue";
import { useSound } from "./stores/soundStore";
import { useMousePressed } from "@vueuse/core";
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const sound = useSound();
</script>

<template>
  <div class="wrapper" @mousedown="sound.playSound()">
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
