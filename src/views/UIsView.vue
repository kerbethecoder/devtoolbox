<script setup>
import BaseNav from '../components/BaseNav.vue';
import {
  CSSLoaders,
  HeadlessUI,
  OneDivLoaders,
  TailwindUI,
  UIBall,
  UIVerse,
} from '../assets/thumbnails/uis/index';

const SITES = [
  {
    imgSrc: CSSLoaders,
    alt: 'CSS Loaders website snapshot',
    title: 'CSS Loaders',
    url: 'https://css-loaders.com/',
    description: 'A collection of pure CSS loaders for your web projects.',
  },
  {
    imgSrc: HeadlessUI,
    alt: 'Headless UI website snapshot',
    title: 'Headless UI',
    url: 'https://headlessui.com/',
    description: 'Unstyled, accessible UI components built for React and Vue.',
  },
  {
    imgSrc: OneDivLoaders,
    alt: 'One Div Loaders website snapshot',
    title: 'One Div Loaders',
    url: 'https://onedivloaders.vercel.app/',
    description: 'Simple, creative loaders made with just one div.',
  },
  {
    imgSrc: TailwindUI,
    alt: 'Tailwind UI website snapshot',
    title: 'Tailwind UI',
    url: 'https://tailwindui.com/',
    description: 'Beautifully designed UI components built with Tailwind CSS.',
  },
  {
    imgSrc: UIBall,
    alt: 'UI Ball website snapshot',
    title: 'UI Ball',
    url: 'https://uiball.com/ldrs/',
    description: 'Explore a variety of CSS-based UI loaders and animations.',
  },
  {
    imgSrc: UIVerse,
    alt: 'uiverse website snapshot',
    title: 'uiverse',
    url: 'https://uiverse.io/',
    description:
      'Interactive UI components like buttons and loaders for web design.',
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
