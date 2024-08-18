<script setup>
import { RouterView } from 'vue-router';

import BaseFooter from './components/BaseFooter.vue';
import BaseNav from './components/BaseNav.vue';
</script>

<template>
  <main class="grid min-h-screen grid-rows-12 place-items-center">
    <div class="row-span-2 row-start-2 space-y-3 text-center">
      <h1 class="font-abril text-5xl font-bold">DevToolBox</h1>
      <p class="px-[500px] text-lg">
        DevToolBox is a curated collection of essential resources and tools,
        helping developers find the perfect inspirations and solutions for their
        projects.
      </p>
    </div>
    <section class="row-span-8 grid grid-cols-12">
      <BaseNav />
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
</style>
