<script setup>
import BaseNav from '../components/BaseNav.vue';
import {
  NotePadFonts,
  fontpair,
  GoogleFonts,
  FontJoy,
  FontShare,
  Monotype,
} from '../assets/thumbnails/fonts/index';

const SITES = [
  {
    imgSrc: NotePadFonts,
    alt: 'The NotePad. website snapshot',
    title: 'The NotePad.',
    url: 'https://the-notepad-by-kerbe.vercel.app/font-pairings',
    description: 'Explore curated font pairings to enhance your design.',
  },
  {
    imgSrc: fontpair,
    alt: 'fontpair.co website snapshot',
    title: 'fontpair',
    url: 'https://www.fontpair.co/',
    description: 'Find perfect font pairings for your design projects.',
  },
  {
    imgSrc: GoogleFonts,
    alt: 'google fonts website snapshot',
    title: 'Google Fonts',
    url: 'https://fonts.google.com/',
    description: 'Access a vast library of free, open-source fonts.',
  },
  {
    imgSrc: FontShare,
    alt: 'font share website snapshot',
    title: 'Font Share',
    url: 'https://www.fontshare.com/',
    description:
      'A free, high-quality font library for personal and commercial use.',
  },
  {
    imgSrc: FontJoy,
    alt: 'font joy website snapshot',
    title: 'Font Joy',
    url: 'https://fontjoy.com/',
    description:
      'A tool that generates harmonious font pairings with AI assistance.',
  },
  {
    imgSrc: Monotype,
    alt: 'monotype website snapshot',
    title: 'Monotype',
    url: 'https://www.monotype.com/font-pairing#/playground?fontPair1=Vicky&fontPair2=Suprema',
    description:
      'A renowned platform offering premium fonts and typography solutions.',
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
