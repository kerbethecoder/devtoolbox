<script setup>
import { RouterView } from 'vue-router';

import BaseFooter from './components/BaseFooter.vue';
import BaseNav from './components/BaseNav.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
</script>

<template>
  <main class="flex h-screen flex-col items-center justify-center">
    <div class="mt-10 flex flex-col items-center justify-center gap-4">
      <div class="flex items-center gap-10">
        <h1 class="dark:text-lightClr font-abril text-5xl font-bold">
          DevToolBox
        </h1>
        <ToggleSwitch />
      </div>
      <p class="dark:text-lightClr text-center">
        DevToolBox is a curated collection of essential resources and tools,
        helping developers find the perfect inspirations and solutions for their
        projects.
      </p>
    </div>
    <section class="mx-44 my-10 flex flex-1 items-start justify-center gap-40">
      <BaseNav class="" />
      <RouterView class="" />
    </section>
    <BaseFooter class="mb-10" />
  </main>
</template>
