<script setup>
import BaseNav from '../components/BaseNav.vue';
import {
  DesignStripe,
  EmojiDB,
  OpenPeeps,
  StorySet,
  UnDraw,
} from '../assets/thumbnails/illustrations/index';

const SITES = [
  {
    imgSrc: DesignStripe,
    alt: 'Designstripe website snapshot',
    title: 'designstripe',
    url: 'https://designstripe.com/search/illustrations',
    description:
      'Access customizable illustrations for your creative projects.',
  },
  {
    imgSrc: EmojiDB,
    alt: 'Emojidb website snapshot',
    title: 'Emojidb',
    url: 'https://emojidb.org/',
    description: 'Find a vast collection of emojis for any context.',
  },
  {
    imgSrc: OpenPeeps,
    alt: 'OpenPeeps website snapshot',
    title: 'OpenPeeps',
    url: 'https://www.openpeeps.com/',
    description: 'Get hand-drawn, customizable illustrations for your designs.',
  },
  {
    imgSrc: StorySet,
    alt: 'storyset website snapshot',
    title: 'storyset',
    url: 'https://storyset.com/',
    description:
      'Explore and use free, editable illustrations to tell your story.',
  },
  {
    imgSrc: UnDraw,
    alt: 'unDraw website snapshot',
    title: 'unDraw',
    url: 'https://undraw.co/',
    description:
      'Find open-source, customizable illustrations for your projects.',
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
