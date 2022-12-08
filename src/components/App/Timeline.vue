<script>
import { Cake, Briefcase, Award, Book, Calendar, Github, ExternalLink } from "lucide-vue-next";
import gql from "graphql-tag";
import { ref } from "@vue/reactivity";
import Loader from "../Plugins/Loader.vue";

export default {
  components: {
    Cake,
    Briefcase,
    Award,
    Book,
    ExternalLink,
    Calendar,
    Github,
    Loader,
  },
  data() {
    return {
      items: "",
    };
  },

  // vue apollo query
  apollo: {
    timelinesConnection: {
      query: gql`
        query MyQuery {
          timelinesConnection(orderBy: createdAt_DESC, first: 100) {
            edges {
              node {
                id
                timelineDate
                timelineDescription
                timelineLink
                timelineLinkTitle
                timelineTitle
                timelineType
              }
            }
          }
        }
      `,
      update(data) {
        this.items = data.timelinesConnection.edges;
      },
    },
  },
};
</script>

<template>
  <Loader v-if="$apollo.loading" />
  <ul class="cards-list bounce-in" role="list" v-else>
    <div class="card-container">
      <li class="card" v-for="item in items" :key="item.id">
        <div class="card-content">
          <span class="card-info-icon"
            ><Briefcase v-if="item.node.timelineType == 'Job'" />
            <Book v-if="item.node.timelineType == 'Learning'" />
            <Award v-if="item.node.timelineType == 'Experience'"
          /></span>

          <div class="card-info-container">
            <div class="card-heading">
              <h1>{{ item.node.timelineTitle }}</h1>
              <span class="card-date"
                ><Calendar class="card-content-icon" /> {{ item.node.timelineDate }}</span
              >
            </div>

            <div class="card-description">
              <p>
                {{ item.node.timelineDescription }}
              </p>

              <div class="card-link-container" v-if="item.node.timelineLink != null">
                <a :href="item.node.timelineLink" target="_blank">
                  Visit {{ item.node.timelineLinkTitle }} <ExternalLink class="link-icon"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute left-1/2 -ml-0.5 w-0.5 h-5 bg-gray-200 dark:bg-gray-600"></div>
      </li>

      <li class="card">
        <div class="card-content">
          <span class="card-info-icon"><Cake /></span>
          <div class="card-info-container">
            <div class="card-heading">
              <h1>Birthday!</h1>
              <span class="card-date"><Calendar class="card-content-icon" /> July 1996</span>
            </div>
            <div class="card-description">
              <p>I was born the 18th of July 1996</p>
            </div>
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
  @apply relative flex items-center justify-between px-4 py-4 sm:px-3;
}

.card-info-container {
  @apply flex flex-col items-center justify-start w-full px-4;
}

.card-info-icon {
  @apply text-xl p-3 bg-emerald-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-emerald-600 rounded-full;
}

.card-heading {
  @apply w-full flex sm:flex-row flex-col justify-between;
}

.card-heading h1 {
  @apply text-gray-700 dark:text-white text-lg font-bold;
}

.card-date {
  @apply flex justify-center items-center px-2 bg-emerald-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-emerald-600 text-sm rounded-1xl;
}

.card-content-icon {
  @apply w-4 h-4 mr-2;
}

.card-description {
  @apply w-full min-w-0 flex-1 mt-2 text-2xl;
}

.card-description p {
  @apply flex items-center mt-1 text-gray-500 dark:text-gray-400 text-base;
}

.card-link-container {
  @apply block;
}

.card-link-container a {
  @apply inline-flex items-center justify-center w-full sm:w-auto bg-gray-50 bg-opacity-75 hover:bg-gray-100 hover:bg-opacity-75 hover:text-gray-700 dark:bg-[#0C0E10]  dark:bg-opacity-75 dark:hover:bg-gray-800 dark:hover:bg-opacity-75 dark:border-gray-800 dark:hover:border-gray-700  dark:text-emerald-500 dark:hover:text-emerald-400 backdrop-filter backdrop-blur-sm saturate-200 text-gray-500  border border-gray-300 hover:border-gray-400 rounded-lg cursor-pointer  px-4 py-1 text-sm mt-4 transition-colors duration-200 ease-in-out;
}

.link-icon {
  @apply w-3 h-3 ml-1;
}
</style>
