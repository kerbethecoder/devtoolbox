<script setup>
import BaseNav from '../components/BaseNav.vue';
import {
  BootstrapIcon,
  FAIcon,
  HeroIcon,
  MaterialIcon,
} from '../assets/thumbnails/icons/index';

const SITES = [
  {
    imgSrc: BootstrapIcon,
    alt: 'Bootstrap Icons website snapshot',
    title: 'Bootstrap Icons',
    url: 'https://icons.getbootstrap.com/',
    description: 'Free, customizable icons for Bootstrap projects.',
  },
  {
    imgSrc: FAIcon,
    alt: 'Font Awesome website snapshot',
    title: 'Font Awesome',
    url: 'https://fontawesome.com/',
    description:
      'A vast library of icons for easy integration in web projects.',
  },
  {
    imgSrc: HeroIcon,
    alt: 'Heroicons website snapshot',
    title: 'Heroicons',
    url: 'https://heroicons.com/',
    description: 'Free, customizable icons for modern web and UI designs.',
  },
  {
    imgSrc: MaterialIcon,
    alt: 'M3 google fonts website snapshot',
    title: 'Material Design Icons',
    url: 'https://fonts.google.com/icons',
    description: 'Open-source icons, easy to use and style.',
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
