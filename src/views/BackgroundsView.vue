<script setup>
import BaseNav from '../components/BaseNav.vue';
import {
  BGJar,
  CSSPatterns,
  Haikei,
  HeroPatterns,
  SuperDesigner,
} from '../assets/thumbnails/backgrounds/index';

const SITES = [
  {
    imgSrc: BGJar,
    alt: 'BG Jar website snapshot',
    title: 'BG Jar',
    url: 'https://bgjar.com/',
    description: 'Create beautiful SVG backgrounds for websites and apps.',
  },
  {
    imgSrc: CSSPatterns,
    alt: 'CSS Patterns website snapshot',
    title: 'CSS Patterns',
    url: 'https://css-pattern.com/',
    description: 'Create seamless patterns using CSS for your web projects.',
  },
  {
    imgSrc: Haikei,
    alt: 'Haikei website snapshot',
    title: 'Haikei',
    url: 'https://haikei.app/generators/',
    description:
      'Generate unique, customizable backgrounds for your creative projects.',
  },
  {
    imgSrc: HeroPatterns,
    alt: 'Hero Patterns website snapshot',
    title: 'Hero Patterns',
    url: 'https://heropatterns.com/',
    description:
      'Generate repeatable SVG background patterns for your designs.',
  },
  {
    imgSrc: SuperDesigner,
    alt: 'Super Designer website snapshot',
    title: 'Super Designer',
    url: 'https://superdesigner.co/',
    description: 'Easily design and customize stunning backgrounds.',
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
