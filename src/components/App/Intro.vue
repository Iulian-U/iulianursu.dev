<script setup>
import { RouterLink } from "vue-router";
import { User, Code, Github } from "lucide-vue-next";
</script>

<template>
  <div class="container bounce-in">
    <h1>
      Hey
      <span class="wave-icon wave">👋</span>
      I'm Iulian, a
      <div class="title">developer</div>
    </h1>
    <p class="about">I am a 26 year old Self-taught Front-End Developer</p>
    <div class="btn-container">
      <div class="btn">
        <a
          href="https://www.linkedin.com/in/iulian-ursu-28006625a/"
          target="blank_"
          class="btn-link"
        >
          <User class="btn-icon" />
          <span>About</span></a
        >
      </div>

      <div class="btn">
        <router-link to="/projects" class="btn-link">
          <Code class="btn-icon" />
          <span>Projects</span></router-link
        >
      </div>

      <div class="btn">
        <a href="https://github.com/Iulian-U" target="blank_" class="btn-link">
          <Github class="btn-icon" />
          <span>Github</span></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/animations";

.container {
  @apply max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center;
}

h1 {
  @apply sm:px-0 px-1  text-gray-900 dark:text-light-200 text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold;
}

.wave-icon {
  @apply inline-block;
}

.title {
  @apply inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-emerald-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-emerald-600 rounded-2xl  mt-4;
}

.about {
  @apply max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-lg md:text-xl md:max-w-3xl;
}

.btn-container {
  @apply flex flex-col sm:flex-row items-center justify-center sm:space-x-4  space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4;
}

.btn {
  @apply w-full sm:w-auto sm:px-0 px-8;
}

.btn-link {
  @apply inline-flex items-center justify-center w-full sm:w-auto bg-gray-50 bg-opacity-75 hover:bg-gray-100 hover:bg-opacity-75 hover:text-gray-700 dark:bg-[#0C0E10]  dark:bg-opacity-75 dark:hover:bg-gray-800 dark:hover:bg-opacity-75 dark:border-gray-800 dark:hover:border-gray-700  dark:text-emerald-500 dark:hover:text-emerald-400 backdrop-filter backdrop-blur-sm saturate-200 text-gray-500  border border-gray-300 hover:border-gray-400 rounded-lg cursor-pointer  px-8 py-2 transition-colors duration-200 ease-in-out;
}

.btn-icon {
  @apply w-5 h-5 mr-3;
}
</style>
