<script setup>
const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/uis/css-loaders.png',
    alt: 'CSS Loaders website snapshot',
    title: 'CSS Loaders',
    url: 'https://css-loaders.com/',
    description: 'A collection of pure CSS loaders for your web projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/uis/headlessui.png',
    alt: 'Headless UI website snapshot',
    title: 'Headless UI',
    url: 'https://headlessui.com/',
    description: 'Unstyled, accessible UI components built for React and Vue.',
  },
  {
    imgSrc: 'src/assets/thumbnails/uis/one-div-loaders.png',
    alt: 'One Div Loaders website snapshot',
    title: 'One Div Loaders',
    url: 'https://onedivloaders.vercel.app/',
    description: 'Simple, creative loaders made with just one div.',
  },
  {
    imgSrc: 'src/assets/thumbnails/uis/tailwindui.png',
    alt: 'Tailwind UI website snapshot',
    title: 'Tailwind UI',
    url: 'https://tailwindui.com/',
    description: 'Beautifully designed UI components built with Tailwind CSS.',
  },
  {
    imgSrc: 'src/assets/thumbnails/uis/uiball.png',
    alt: 'UI Ball website snapshot',
    title: 'UI Ball',
    url: 'https://uiball.com/ldrs/',
    description: 'Explore a variety of CSS-based UI loaders and animations.',
  },
  {
    imgSrc: 'src/assets/thumbnails/uis/uiverse.png',
    alt: 'uiverse website snapshot',
    title: 'uiverse',
    url: 'https://uiverse.io/',
    description:
      'Interactive UI components like buttons and loaders for web design.',
  },
];
</script>

<template>
  <section class="flex flex-wrap gap-10">
    <div
      v-for="site in SITES"
      :key="site.title"
      class="shdow bg-lightScnd dark:bg-darkScnd text-darkFnt dark:text-lightFnt flex w-[450px] gap-5 rounded-2xl p-6"
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

<style scoped>
.shdow {
  /* box-shadow: 0 8px 8px -4px rgb(0 0 0 / 0.2); */
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
</style>
