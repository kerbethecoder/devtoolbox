<script setup>
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
  <section class="flex flex-wrap gap-10">
    <div
      v-for="site in SITES"
      :key="site.title"
      class="bg-lightScnd dark:bg-darkScnd text-darkFnt dark:text-lightFnt flex w-[450px] gap-5 rounded-2xl p-6 shadow-xl transition duration-300 ease-in-out hover:-translate-y-1"
    >
      <img
        :src="site.imgSrc"
        :alt="site.alt"
        class="size-24 rounded-full object-cover"
      />
      <div class="flex-1 space-y-2">
        <div class="flex justify-between">
          <h2 class="text-lg font-bold">{{ site.title }}</h2>
          <a
            :href="site.url"
            target="_blank"
            rel="noopener noreferrer"
            class="transition duration-300 ease-in-out hover:scale-125"
          >
            <i
              class="fa-solid fa-up-right-from-square text-darkFnt dark:text-lightFnt"
            ></i>
          </a>
        </div>
        <hr
          class="border-darkScnd dark:border-lightScnd opacity-10 dark:opacity-30"
        />
        <p>{{ site.description }}</p>
      </div>
    </div>
  </section>
</template>
