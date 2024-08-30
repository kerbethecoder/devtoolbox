<script setup>
import BaseNav from '../components/BaseNav.vue';

const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/templates/gatsby.png',
    alt: 'Gatsby template website snapshot',
    title: 'Gatsby',
    url: 'https://github.com/kerbethecoder/gatsby',
    description:
      'A ready-to-use Gatsby template for fast and efficient static site generation.',
  },
  {
    imgSrc: 'src/assets/thumbnails/templates/next.png',
    alt: 'Next template website snapshot',
    title: 'Next',
    url: 'https://github.com/kerbethecoder/next',
    description:
      'A Next.js template designed for scalable and optimized React applications.',
  },
  {
    imgSrc: 'src/assets/thumbnails/templates/react.png',
    alt: 'React template website snapshot',
    title: 'React',
    url: 'https://github.com/kerbethecoder/react',
    description: 'A versatile React template for rapid development.',
  },
  {
    imgSrc: 'src/assets/thumbnails/templates/svelte.png',
    alt: 'Svelte template website snapshot',
    title: 'Svelte',
    url: 'https://github.com/kerbethecoder/svelte',
    description:
      'A simple and efficient Svelte template for quick development.',
  },
  {
    imgSrc: 'src/assets/thumbnails/templates/sveltekit.png',
    alt: 'SvelteKit template website snapshot',
    title: 'SvelteKit',
    url: 'https://github.com/kerbethecoder/sveltekit',
    description:
      'A modern SvelteKit template for building high-performance web apps.',
  },
  {
    imgSrc: 'src/assets/thumbnails/templates/vue.png',
    alt: 'Vue template website snapshot',
    title: 'Vue',
    url: 'https://github.com/kerbethecoder/vue',
    description: 'A customizable Vue template for building dynamic web apps.',
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
