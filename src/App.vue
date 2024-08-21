<script setup>
import { RouterView } from 'vue-router';

import BaseFooter from './components/BaseFooter.vue';
import BaseNav from './components/BaseNav.vue';
</script>

<template>
  <main class="flex h-screen flex-col items-center justify-center">
    <div class="flex w-full flex-col items-center justify-center gap-2 pt-10">
      <h1 class="font-abril text-5xl font-bold">DevToolBox</h1>
      <p class="w-1/2 text-center text-lg">
        DevToolBox is a curated collection of essential resources and tools,
        helping developers find the perfect inspirations and solutions for their
        projects.
      </p>
    </div>
    <section class="mx-44 my-10 flex flex-1 items-start justify-center gap-40">
      <BaseNav class="" />
      <RouterView class="" />
    </section>
    <BaseFooter class="pb-10" />
  </main>
</template>
