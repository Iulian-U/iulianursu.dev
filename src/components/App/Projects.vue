<script>
import { Github, Globe } from "lucide-vue-next";
import gql from "graphql-tag";
import { ref } from "@vue/reactivity";
import Loader from "../Plugins/Loader.vue";

export default {
  components: {
    Github,
    Globe,
    Loader,
  },
  data() {
    return {
      projects: "",
      attachments: "",
    };
  },

  // vue apollo query
  apollo: {
    projectsConnection: {
      query: gql`
        query MyQuery {
          projectsConnection(first: 100) {
            edges {
              node {
                icon
                title
                id
                description
                githubLink
                previewLink
              }
            }
          }
        }
      `,
      update(data) {
        this.projects = data.projectsConnection.edges;
      },
    },
  },
};
</script>

<template>
  <Loader v-if="$apollo.loading" />

  <ul class="cards-list" role="list" v-else>
    <div class="card-container bounce-in">
      <li class="card" v-for="project in projects" :key="project.id">
        <div class="card-content">
          <div class="card-info-container">
            <span class="card-info-icon">{{ project.node.icon }}</span>
            <div class="card-description">
              <h1>{{ project.node.title }}</h1>
              <p>{{ project.node.description }}</p>
            </div>
          </div>
          <div class="card-link-container">
            <a :href="project.node.previewLink" target="_blank"> <Globe class="link-icon" /></a>
            <a :href="project.node.githubLink" target="_blank"><Github class="link-icon" /></a>
          </div>
        </div>
      </li>
    </div>
  </ul>
</template>

<style scoped>
@import "../../assets/css/animations";

.cards-list {
  @apply flex flex-col space-y-4 px-4;
}

.card-container .card {
  @apply mb-4 bg-gray-50 bg-opacity-75 dark:bg-[#0C0E10]  dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg transition ease-in-out duration-300;
}

.card-content {
  @apply flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6;
}

.card-info-container {
  @apply flex flex-1 items-center justify-start w-full;
}

.card-info-icon {
  @apply text-xl;
}

.card-description {
  @apply min-w-0 flex-1 px-4;
}

.card-description h1 {
  @apply text-gray-700 dark:text-white text-lg font-bold;
}

.card-description p {
  @apply flex items-center mt-1 text-gray-500 dark:text-gray-400 text-sm;
}

.card-link-container {
  @apply sm:block sm:w-auto w-full flex;
}

.card-link-container a {
  @apply relative inline-flex items-center justify-center w-full sm:mx-2 mx-2 sm:mt-0 mt-4 sm:w-10 h-10 px-3 py-2 bg-gray-50 bg-opacity-75 hover:bg-gray-100 hover:bg-opacity-75 hover:text-gray-700 dark:bg-[#0C0E10]  dark:bg-opacity-75 dark:hover:bg-gray-800 dark:hover:bg-opacity-75 dark:border-gray-800 dark:hover:border-gray-700  dark:text-emerald-500 dark:hover:text-emerald-400 backdrop-filter backdrop-blur-sm saturate-200 text-gray-500  border border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200 ease-in-out;
}

.link-icon {
  @apply w-4 h-4;
}
</style>
