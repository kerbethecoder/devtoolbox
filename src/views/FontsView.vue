<script setup>
const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/fonts/notepad-fonts.png',
    alt: 'The NotePad. website snapshot',
    title: 'The NotePad.',
    url: 'https://the-notepad-by-kerbe.vercel.app/font-pairings',
    description: 'Explore curated font pairings to enhance your design.',
  },
  {
    imgSrc: 'src/assets/thumbnails/fonts/fontpair.png',
    alt: 'fontpair.co website snapshot',
    title: 'fontpair',
    url: 'https://www.fontpair.co/',
    description: 'Find perfect font pairings for your design projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/fonts/google-fonts.png',
    alt: 'google fonts website snapshot',
    title: 'Google Fonts',
    url: 'https://fonts.google.com/',
    description: 'Access a vast library of free, open-source fonts.',
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
