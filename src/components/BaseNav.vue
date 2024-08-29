<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

import router from '../router';

const ROUTES = [
  {
    path: '/inspirations',
    label: 'Inspirations',
  },
  {
    path: '/colors',
    label: 'Colors',
  },
  {
    path: '/fonts',
    label: 'Fonts',
  },
  {
    path: '/illustrations',
    label: 'Illustrations',
  },
  {
    path: '/icons',
    label: 'Icons',
  },
  {
    path: '/backgrounds',
    label: 'Backgrounds',
  },
  {
    path: '/UIs',
    label: 'UIs',
  },
  {
    path: '/templates',
    label: 'Templates',
  },
];

const currentPath = computed(() => router.currentRoute.value.fullPath);
</script>

<template>
  <nav
    class="col-start-3 h-fit min-w-fit space-y-10 rounded-2xl bg-lightScnd p-8 text-darkFnt shadow-xl dark:bg-darkScnd dark:text-lightFnt"
  >
    <div class="links flex flex-col gap-2">
      <RouterLink
        v-for="route in ROUTES"
        :key="route.path"
        :to="route.path"
        :class="
          currentPath === route.path
            ? 'font-bold underline decoration-2 underline-offset-4'
            : 'transitionA'
        "
        >{{ route.label }}</RouterLink
      >
    </div>
    <div class="flex flex-col gap-2">
      <RouterLink to="/">
        <button
          class="w-full rounded-md bg-darkScnd px-8 py-3 font-bold text-lightFnt transition duration-200 ease-in-out hover:scale-105 dark:bg-lightScnd dark:text-darkFnt"
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
          class="w-full rounded-md border border-darkScnd px-8 py-3 font-bold transition duration-200 ease-in-out hover:scale-105 dark:border-lightScnd"
        >
          Portfolio
        </button>
      </a>
    </div>
  </nav>
</template>

<style scoped>
html.dark .transitionA::after {
  background-color: #e3e3e3;
}

.transitionA {
  display: inline-block;
  position: relative;
  width: fit-content;
}

.transitionA::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #1a1a1a;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.transitionA:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
