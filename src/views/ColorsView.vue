<script setup>
const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/colors/shecodes.png',
    alt: 'SheCodes website snapshot',
    title: 'SheCodes',
    url: 'https://palettes.shecodes.io/',
    description:
      'Discover and explore stunning color palettes for your projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/colors/coolors.png',
    alt: 'Coolors website snapshot',
    title: 'Coolors',
    url: 'https://coolors.co/',
    description: 'Effortlessly generate and explore color palettes.',
  },
  {
    imgSrc: 'src/assets/thumbnails/colors/uigradients.png',
    alt: 'UI Gradients website snapshot',
    title: 'UI Gradients',
    url: 'https://uigradients.com/#MidnightCity',
    description: 'Discover and create beautiful gradient combinations.',
  },
  {
    imgSrc: 'src/assets/thumbnails/colors/coolors-gradients.png',
    alt: 'Coolors Gradients website snapshot',
    title: 'Coolors Gradients',
    url: 'https://coolors.co/gradients',
    description: 'Find stunning gradients for your UI designs.',
  },
];
</script>

<template>
  <section class="flex flex-wrap gap-10">
    <div
      v-for="site in SITES"
      :key="site.title"
      class="bg-lightScnd dark:bg-darkScnd text-darkFnt dark:text-lightFnt flex w-[450px] gap-5 rounded-2xl p-6 shadow-xl transition duration-200 ease-in-out hover:-translate-y-1"
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
