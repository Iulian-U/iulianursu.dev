import { defineStore } from "pinia";
import { Howl } from "howler";
import { useStorage } from "@vueuse/core";

import soundFile from "../assets/sound/click.ogg";

export const useSound = defineStore("sound", () => {
  let sound = null;
  let soundLabel = useStorage("soundLabel", "Sounds On");
  let isSoundEnabled = useStorage("isSoundEnabled", true);

  function playSound() {
    if (this.isSoundEnabled) {
      this.sound = new Howl({
        src: [soundFile],
        volume: 0.1,
      });
      this.sound.play();
    }
  }

  function toggleSound() {
    this.isSoundEnabled = !this.isSoundEnabled;
    if (this.isSoundEnabled) {
      this.soundLabel = "Sounds On";
    } else {
      this.soundLabel = "Sounds Off";
    }
  }

  return { soundLabel, isSoundEnabled, sound, playSound, toggleSound };
});
