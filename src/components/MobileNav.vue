<script setup>
import { ref, computed } from 'vue';

import router from '../router';
import ToggleSwitch from './ToggleSwitch.vue';

const isMenuOpen = ref(false);

const toggleOffCanvas = () => {
  const menu = document.getElementById('offCanvasMenu');
  menu.classList.toggle('hdn');
  menu.classList.toggle('open');

  isMenuOpen.value = menu.classList.contains('open');
};

const currentPath = computed(() => router.currentRoute.value.name);
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- Off-Canvas Mobile Navigation -->
    <div
      class="mobileMenu cursor-pointer border border-darkFnt/60 text-sm text-darkFnt dark:border-lightFnt/60 dark:text-lightFnt"
      @click="toggleOffCanvas"
    >
      {{ currentPath }} &nbsp;
      <span v-if="isMenuOpen"><i class="fa-solid fa-xmark"></i></span>
      <span v-else><i class="fa-solid fa-bars"></i></span>
    </div>

    <!-- Off-Canvas Menu -->
    <div
      id="offCanvasMenu"
      class="off-canvas hdn flex h-full flex-col bg-lightScnd dark:bg-darkScnd"
    >
      <div class="flex items-center justify-between">
        <span class="font-bold text-darkFnt dark:text-lightFnt">Dark Mode</span>
        <ToggleSwitch />
      </div>
      <hr class="border-1 dark:border-lightBg my-2 border-[#1a1a1a33]" />
      <nav class="flex-grow text-darkFnt dark:text-lightFnt">
        <RouterLink to="/inspirations">Inspirations</RouterLink>
        <RouterLink to="/colors">Colors</RouterLink>
        <RouterLink to="/fonts">Fonts</RouterLink>
        <RouterLink to="/illustrations">Illustrations</RouterLink>
        <RouterLink to="/icons">Icons</RouterLink>
        <RouterLink to="/backgrounds">Backgrounds</RouterLink>
        <RouterLink to="/uis">UIs</RouterLink>
        <RouterLink to="/templates">Templates</RouterLink>
      </nav>
      <RouterLink to="/">
        <button
          class="mt-auto w-full rounded-md bg-darkScnd px-8 py-3 font-bold text-lightFnt dark:bg-lightScnd dark:text-darkFnt"
        >
          Developer
        </button>
      </RouterLink>
      <a
        href="https://kerbethecoder.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          class="w-full rounded-md border border-darkScnd px-8 py-3 font-bold text-darkFnt dark:border-lightScnd dark:text-lightFnt"
        >
          Portfolio
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.mobileMenu {
  width: fit-content;
  height: fit-content;
  padding: 4px 16px;
  border-radius: 6px;
}

.off-canvas {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100vh;
  color: #1a1a1a;
  padding: 1rem;
  transition: 0.3s ease;
  z-index: 1;
}

.off-canvas a {
  display: block;
  margin: 10px 0;
  /* color: #1a1a1a; */
  text-decoration: none;
}

.hdn {
  transform: translate(-250px);
}

.open {
  transform: translate(250px);
}
</style>
