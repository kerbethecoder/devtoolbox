<script setup>
const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/backgrounds/bg-jar.png',
    alt: 'BG Jar website snapshot',
    title: 'BG Jar',
    url: 'https://bgjar.com/',
    description: 'Create beautiful SVG backgrounds for websites and apps.',
  },
  {
    imgSrc: 'src/assets/thumbnails/backgrounds/css-patterns.png',
    alt: 'CSS Patterns website snapshot',
    title: 'CSS Patterns',
    url: 'https://css-pattern.com/',
    description: 'Create seamless patterns using CSS for your web projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/backgrounds/haikei.png',
    alt: 'Haikei website snapshot',
    title: 'Haikei',
    url: 'https://haikei.app/generators/',
    description:
      'Generate unique, customizable backgrounds for your creative projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/backgrounds/hero-patterns.png',
    alt: 'Hero Patterns website snapshot',
    title: 'Hero Patterns',
    url: 'https://heropatterns.com/',
    description:
      'Generate repeatable SVG background patterns for your designs.',
  },
  {
    imgSrc: 'src/assets/thumbnails/backgrounds/superdesigner.png',
    alt: 'Super Designer website snapshot',
    title: 'Super Designer',
    url: 'https://superdesigner.co/',
    description: 'Easily design and customize stunning backgrounds.',
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
