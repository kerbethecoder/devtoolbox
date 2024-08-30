<script setup>
import { RouterView } from 'vue-router';

import BaseFooter from './components/BaseFooter.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import MobileNav from './components/MobileNav.vue';
</script>

<template>
  <main>
    <section class="flex h-screen flex-col lg:hidden">
      <!-- mobile header -->
      <header
        class="bg-lightBg dark:bg-darkBg sticky top-0 z-10 flex items-center justify-between px-6 py-4"
      >
        <h1
          class="font-abril text-2xl text-darkFnt lg:text-5xl dark:text-lightFnt"
        >
          DevToolBox
        </h1>
        <MobileNav />
      </header>
      <p class="text-center text-sm text-darkFnt dark:text-lightFnt">
        DevToolBox is a curated collection of essential resources and tools,
        helping developers find the perfect inspirations and solutions for their
        projects.
      </p>
      <RouterView class="p-4" />
      <BaseFooter class="mt-auto" />
    </section>

    <section class="hidden h-screen flex-col items-center pt-10 lg:flex">
      <!-- laptop header -->
      <header class="flex flex-col items-center gap-2">
        <div class="flex items-center gap-10">
          <h1 class="font-abril text-5xl text-darkFnt dark:text-lightFnt">
            DevToolBox
          </h1>
          <ToggleSwitch />
        </div>
        <p class="text-center text-darkFnt dark:text-lightFnt">
          DevToolBox is a curated collection of essential resources and tools,
          helping developers find the perfect inspirations and solutions for
          their projects.
        </p>
      </header>

      <RouterView />
      <BaseFooter class="mt-auto" />
    </section>
  </main>
</template>
