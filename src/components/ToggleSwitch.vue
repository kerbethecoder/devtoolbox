<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};

const checkUserPreference = () => {
  const userPrefersDark = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    isDarkMode.value = userPrefersDark;
  }

  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

onMounted(() => {
  checkUserPreference();
});
</script>

<template>
  <div
    @click="toggleDarkMode"
    :class="[
      'flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none',
      isDarkMode ? 'bg-white/10' : 'bg-gray-300',
    ]"
  >
    <span
      :class="[
        'pointer-events-none inline-block size-5 rounded-full bg-white shadow-lg transition duration-200 ease-in-out',
        isDarkMode ? 'translate-x-7' : 'translate-x-0',
      ]"
    ></span>
  </div>
</template>
