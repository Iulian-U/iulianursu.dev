<template>
  <section class="p-4 flexed-line flex items-center">
    <!-- Spotify Icon Component here -->
    <img src="../../assets/icons/icon_spotify.png" alt="spotify-icon" class="h-6 w-6" />
    <!-- This uses Nuxt.js component auto discovery -->
    <div class="flex items-center text-orange-400 text-xs ml-2">
      <span>{{ currentTrackStr }}</span>
    </div>
  </section>
</template>

<script>
import { watch } from "@vue/runtime-core";
import { getNowPlaying } from "../../scripts/spotify";
export default {
  data() {
    return {
      currentTrackStr: "Nothing playing right now.",
    };
  },

  watch: {
    "$route.path"() {
      this.currentTrack();
    },
  },
  beforeMount() {
    this.currentTrack();
  },
  methods: {
    async currentTrack() {
      try {
        const response = await getNowPlaying();
        if (response.status === 200) {
          const { item, is_playing: np } = await response.json();
          this.currentTrackStr = `${np ? "Now playing:" : "Last played:"} ${item.name}
                                  by ${item.artists.map((artist) => artist.name).join(", ")}.`;
        }
      } catch (e) {
        this.currentTrackStr = "Couldn't fetch data :(";
      }
    },
  },
};
</script>
