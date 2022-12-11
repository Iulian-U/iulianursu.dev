import { defineStore } from "pinia";
import { useDark } from "@vueuse/core";

export const useTheme = defineStore("theme", () => {
  const isDark = useDark();

  function toggleDark() {
    isDark.value = false;
  }

  function toggleLight() {
    isDark.value = true;
  }

  return {
    isDark,
    toggleDark,
    toggleLight,
  };
});
