<script setup>
import { RouterLink, RouterView } from 'vue-router';

import BaseFooter from './components/BaseFooter.vue';

import router from './router';

router.isReady().then(() => {
  const currentPathObject = router.currentRoute.value.fullPath;
  // console.log('Route Object', currentPathObject);
});
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
        <div class="links flex flex-col">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/inspirations">Inspirations</RouterLink>
          <RouterLink to="/colors">Colors</RouterLink>
          <RouterLink to="/fonts">Fonts</RouterLink>
          <RouterLink to="/illustrations">Illustrations</RouterLink>
          <RouterLink to="/loaders">Loaders</RouterLink>
          <RouterLink to="/icons">Icons</RouterLink>
          <RouterLink to="/backgrounds">Backgrounds</RouterLink>
          <RouterLink to="/UIs">UIs</RouterLink>
          <RouterLink to="/templates">Templates</RouterLink>
        </div>
        <div class="flex flex-col gap-2">
          <button
            class="whitespace-nowrap rounded-md bg-[#1a1a1a] px-8 py-4 font-bold text-[#eeeeee]"
          >
            The NotePad.
          </button>
          <button
            class="whitespace-nowrap rounded-md border border-[#1a1a1a] px-8 py-4 font-bold"
          >
            Dev Portfolio
          </button>
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
</style>
