<script setup>
import HelloWorld from './components/HelloWorld.vue';

const tailwindcssSrc =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042';
</script>

<template>
  <div class="flex justify-center items-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://tailwindcss.com/">
      <img
        :src="tailwindcssSrc"
        class="logo tailwind"
        alt="Tailwind CSS Logo"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.tailwind:hover {
  filter: drop-shadow(0 0 2em #38bdf8aa);
}
</style>
