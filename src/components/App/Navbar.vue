<script setup>
import { RouterLink } from "vue-router";
import { useTheme } from "../../stores/themeStore";
import { useSound } from "../../stores/soundStore";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  Home,
  Code,
  Clock,
  Settings,
  Github,
  Linkedin,
  Codepen,
  ExternalLink,
  Sun,
  Moon,
  Square,
  CheckSquare,
  Volume2,
  VolumeX,
} from "lucide-vue-next";
import { Menu as MenuIcon } from "lucide-vue-next";

const theme = useTheme();
const sound = useSound();
</script>

<template>
  <nav>
    <span class="nav-left-menu">
      <div>
        <Menu as="div" class="menu">
          <div>
            <MenuButton class="menu-button">
              <MenuIcon class="menu-button-icon" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="menu-items items-left">
              <div class="menu-item-container">
                <router-link to="/">
                  <MenuItem>
                    <span class="menu-item-nav-link">
                      <Home class="menu-item-icon" aria-hidden="true" />
                      <span>Home</span>
                    </span>
                  </MenuItem>
                </router-link>

                <router-link to="/projects">
                  <MenuItem>
                    <span class="menu-item-nav-link">
                      <Code class="menu-item-icon" aria-hidden="true" />
                      <span>Projects</span>
                    </span>
                  </MenuItem>
                </router-link>

                <router-link to="/timeline">
                  <MenuItem>
                    <span class="menu-item-nav-link">
                      <Clock class="menu-item-icon" aria-hidden="true" />
                      <span>Timeline</span>
                    </span>
                  </MenuItem>
                </router-link>
              </div>

              <div class="menu-item-container">
                <a href="https://github.com/Iulian-U" target="blank_">
                  <MenuItem>
                    <Github class="menu-item-icon" aria-hidden="true" />
                  </MenuItem>
                  <MenuItem>
                    <span> Github </span>
                  </MenuItem>
                  <ExternalLink class="menu-additional-icon" />
                </a>

                <a href="https://www.linkedin.com/in/iulian-ursu-28006625a/" target="blank_">
                  <MenuItem>
                    <Linkedin class="menu-item-icon" aria-hidden="true" />
                  </MenuItem>
                  <MenuItem>
                    <span>Linkedin</span>
                  </MenuItem>
                  <ExternalLink class="menu-additional-icon" />
                </a>

                <a href="https://codepen.io/your-work/" target="blank_">
                  <MenuItem>
                    <Codepen class="menu-item-icon" aria-hidden="true" />
                  </MenuItem>
                  <MenuItem>
                    <span>Codepen</span>
                  </MenuItem>
                  <ExternalLink class="menu-additional-icon" />
                </a>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </span>

    <span class="nav-right-menu">
      <div>
        <Menu as="div" class="menu">
          <div>
            <MenuButton class="menu-button">
              <Settings class="menu-button-icon" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="menu-items items-right">
              <div class="menu-item-container">
                <a @click="sound.toggleSound()">
                  <Volume2
                    class="menu-item-icon"
                    aria-hidden="true"
                    v-show="sound.isSoundEnabled == true"
                  />
                  <VolumeX
                    class="menu-item-icon"
                    aria-hidden="true"
                    v-show="sound.isSoundEnabled == false"
                  />
                  <MenuItem>
                    <span>{{ sound.soundLabel }}</span>
                  </MenuItem>
                  <Square class="menu-additional-icon" v-show="sound.isSoundEnabled == false" />
                  <CheckSquare class="menu-additional-icon" v-show="sound.isSoundEnabled == true" />
                </a>
              </div>
              <div class="menu-item-container">
                <a @click="theme.toggleDark()">
                  <Sun class="menu-item-icon" aria-hidden="true" />
                  <MenuItem>
                    <span>Light Theme</span>
                  </MenuItem>
                  <Square class="menu-additional-icon" v-show="theme.isDark == true" />
                  <CheckSquare class="menu-additional-icon" v-show="theme.isDark == false" />
                </a>

                <a @click="theme.toggleLight()">
                  <Moon class="menu-item-icon" aria-hidden="true" />
                  <MenuItem>
                    <span>Dark Theme</span>
                  </MenuItem>
                  <Square class="menu-additional-icon" v-show="theme.isDark == false" />
                  <CheckSquare class="menu-additional-icon" v-show="theme.isDark == true" />
                </a>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </span>
  </nav>
</template>

<style scoped>
nav {
  @apply z-10 w-full h-14 flex justify-between items-center;
}

.menu {
  @apply relative inline-block text-left;
}

.menu-button {
  @apply inline-flex w-full justify-center rounded-md p-3 bg-gray-50 dark:bg-[#0C0E10] hover:bg-gray-200 dark:hover:bg-[#181B20] text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-400 ease-in-out hover:cursor-pointer;
}

.menu-button-icon {
  @apply h-5 w-5;
}

.nav-right-menu .menu-items {
  @apply right-2;
}

.nav-left-menu .menu-items {
  @apply left-2;
}

.menu-items {
  @apply fixed w-[calc(100vw-1rem)] sm: w-56 mt-2 z-10 bg-gray-50 dark:bg-[#0C0E10] bg-opacity-75 backdrop-filter backdrop-blur-md antialiased border border-gray-200 dark:border-gray-800 rounded-md shadow-lg divide-y divide-gray-200 dark:divide-gray-800 focus:outline-none;
}

.menu-item-container {
  @apply py-4;
}

.menu-item-nav-link {
  @apply flex;
}

.menu-item-container a {
  @apply w-full px-4 py-2 flex  items-center text-gray-400  hover: bg-gray-200 dark:hover:bg-[#171b1f] hover:text-gray-700 dark:hover:text-gray-200 hover:cursor-pointer transition-all ease-in-out duration-300;
}

.menu-item-container span {
  @apply w-full;
}

.menu-item-icon {
  @apply h-6 w-6 mr-2 outline-none;
}

.menu-additional-icon {
  @apply h-5 w-5;
}
</style>
