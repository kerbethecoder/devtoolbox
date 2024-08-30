<script setup>
import BaseNav from '../components/BaseNav.vue';

const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/colors/shecodes.png',
    alt: 'SheCodes website snapshot',
    title: 'SheCodes',
    url: 'https://palettes.shecodes.io/',
    description:
      'Discover and explore stunning color palettes for your projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/colors/coolors.png',
    alt: 'Coolors website snapshot',
    title: 'Coolors',
    url: 'https://coolors.co/',
    description: 'Effortlessly generate and explore color palettes.',
  },
  {
    imgSrc: 'src/assets/thumbnails/colors/uigradients.png',
    alt: 'UI Gradients website snapshot',
    title: 'UI Gradients',
    url: 'https://uigradients.com/#MidnightCity',
    description: 'Discover and create beautiful gradient combinations.',
  },
  {
    imgSrc: 'src/assets/thumbnails/colors/coolors-gradients.png',
    alt: 'Coolors Gradients website snapshot',
    title: 'Coolors Gradients',
    url: 'https://coolors.co/gradients',
    description: 'Find stunning gradients for your UI designs.',
  },
];
</script>

<template>
  <section class="mt-10 flex gap-10">
    <div class="hidden w-1/3 justify-end lg:flex">
      <BaseNav class="w-fit" />
    </div>
    <div
      class="flex flex-wrap justify-center gap-6 lg:w-2/3 lg:content-start lg:justify-normal"
    >
      <div
        v-for="site in SITES"
        :key="site.title"
        id="card"
        class="flex w-full gap-4 rounded-xl bg-lightScnd p-6 text-darkFnt shadow-xl sm:w-1/2 lg:w-full lg:transition lg:duration-300 lg:ease-in-out lg:hover:-translate-y-1 xl:w-1/3 dark:bg-darkScnd dark:text-lightFnt"
      >
        <img
          :src="site.imgSrc"
          :alt="site.alt"
          class="size-24 rounded-full object-cover"
        />
        <div>
          <div class="flex justify-between">
            <h2 class="text-lg font-bold">{{ site.title }}</h2>
            <a
              :href="site.url"
              target="_blank"
              rel="noopener noreferrer"
              class="lg:transition lg:duration-200 lg:ease-in-out lg:hover:scale-125"
              ><i
                class="fa-solid fa-up-right-from-square text-darkFnt dark:text-lightFnt"
              ></i
            ></a>
          </div>
          <hr
            class="border-darkScnd opacity-10 dark:border-lightScnd dark:opacity-30"
          />
          <p>{{ site.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
