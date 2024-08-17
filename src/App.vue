<script setup>
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

import BaseFooter from './components/BaseFooter.vue';
import router from './router';

const routes = [
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
    path: '/loaders',
    label: 'Loaders',
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
  <main class="grid min-h-screen grid-rows-12 place-items-center">
    <div class="row-span-2 row-start-2 space-y-3 text-center">
      <h1 class="text-4xl font-bold">DevToolBox</h1>
      <p class="text-lg">
        DevToolBox is a curated collection of essential resources and tools,
        helping developers find the perfect inspirations and solutions for their
        projects.
      </p>
    </div>
    <section class="row-span-8 grid grid-cols-12">
      <nav
        class="col-start-3 h-fit min-w-fit space-y-10 rounded-2xl bg-[#d9d9d9] p-8"
      >
        <div class="links flex flex-col gap-2">
          <RouterLink
            v-for="route in routes"
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
              class="w-full rounded-md bg-[#1a1a1a] px-8 py-3 font-bold text-[#eeeeee] transition duration-300 ease-in-out hover:scale-105"
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
              class="w-full rounded-md border border-[#1a1a1a] px-8 py-3 font-bold transition duration-300 ease-in-out hover:scale-105"
            >
              Portfolio
            </button>
          </a>
        </div>
      </nav>
      <div class="col-span-6 col-start-5">
        <RouterView />
      </div>
    </section>
    <BaseFooter class="row-span-2" />
  </main>
</template>

<style scoped>
.borderGuide {
  border: 1px solid red;
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
