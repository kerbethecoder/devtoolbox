<script setup>
import BaseNav from '../components/BaseNav.vue';
</script>

<template>
  <section class="mt-10 flex gap-10">
    <div class="hidden w-1/3 justify-end lg:flex">
      <BaseNav class="w-fit" />
    </div>
    <div class="lg:w-2/3">
      <div
        class="flex flex-col items-center gap-6 rounded-xl bg-lightScnd p-10 text-darkFnt shadow-xl lg:w-2/3 lg:flex-row lg:transition lg:duration-300 lg:ease-in-out lg:hover:-translate-y-1 dark:bg-darkScnd dark:text-lightFnt"
      >
        <img src="../assets/avatar.svg" alt="avatar" width="170" height="170" />
        <p class="text-center">
          👋 Sup! I&apos;m <span class="font-bold">@kerbethecoder</span>, the
          mastermind behind <span class="font-bold">DevToolBox</span>. Hope you
          find this site as useful as I&apos;ve imagined. Let&apos;s connect —
          whether it&apos;s feedback, collaboration, or just to geek out.
        </p>
      </div>
    </div>
  </section>
</template>
