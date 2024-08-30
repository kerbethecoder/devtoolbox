<script setup>
import BaseNav from '../components/BaseNav.vue';

const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/inspirations/awwwards.png',
    alt: 'Awwwards website snapshot',
    title: 'Awwwards',
    url: 'https://www.awwwards.com/websites/',
    description: 'Showcasing the best in web design and UI inspiration.',
  },
  {
    imgSrc: 'src/assets/thumbnails/inspirations/behance.png',
    alt: 'Behance website snapshot',
    title: 'Behance',
    url: 'https://www.behance.net/search/projects/Web%20Design%20Inspiration',
    description:
      'Discover creative projects and design inspiration from top designers.',
  },
  {
    imgSrc: 'src/assets/thumbnails/inspirations/dribble.png',
    alt: 'Dribble website snapshot',
    title: 'Dribble',
    url: 'https://dribbble.com/tags/web-design-inspiration',
    description:
      'Explore design ideas and UI concepts from the creative community.',
  },
  {
    imgSrc: 'src/assets/thumbnails/inspirations/framer.png',
    alt: 'Framer website snapshot',
    title: 'Framer',
    url: 'https://www.framer.com/marketplace/',
    description: 'Inspiration and tools for interactive web and UI design.',
  },
  {
    imgSrc: 'src/assets/thumbnails/inspirations/webflow.png',
    alt: 'Webflow website snapshot',
    title: 'Webflow',
    url: 'https://webflow.com/templates',
    description:
      'Web design inspiration and tools to build responsive websites.',
  },
];
</script>

<template>
  <section class="mt-10 flex gap-10">
    <div class="hidden w-1/3 justify-end lg:flex">
      <BaseNav class="w-fit" />
    </div>
    <div class="flex flex-wrap justify-center gap-6 lg:w-2/3 lg:justify-normal">
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
