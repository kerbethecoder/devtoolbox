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
      class="shdow flex w-[450px] gap-5 rounded-2xl bg-[#d9d9d9] px-6 py-6"
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
            <i class="fa-solid fa-up-right-from-square text-[#1a1a1a]"></i>
          </a>
        </div>
        <hr class="border-black opacity-10" />
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
