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
    class="shdow bg-lightScnd dark:bg-darkScnd text-darkFnt dark:text-lightFnt col-start-3 h-fit min-w-fit space-y-10 rounded-2xl p-8"
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
          class="text-lightFnt dark:text-darkFnt bg-darkScnd dark:bg-lightScnd w-full rounded-md px-8 py-3 font-bold transition duration-200 ease-in-out hover:scale-105"
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
          class="border-darkScnd dark:border-lightScnd w-full rounded-md border px-8 py-3 font-bold transition duration-200 ease-in-out hover:scale-105"
        >
          Portfolio
        </button>
      </a>
    </div>
  </nav>
</template>

<style scoped>
html.dark .transitionA::after {
  background-color: #eee;
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

.shdow {
  /* box-shadow: 0 8px 8px -4px rgb(0 0 0 / 0.2); */
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
</style>
