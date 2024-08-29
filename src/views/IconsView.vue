<script setup>
const SITES = [
  {
    imgSrc: 'src/assets/thumbnails/icons/bootstrap-icons.png',
    alt: 'Bootstrap Icons website snapshot',
    title: 'Bootstrap Icons',
    url: 'https://icons.getbootstrap.com/',
    description: 'Free, customizable icons for Bootstrap projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/icons/fontawesome.png',
    alt: 'Font Awesome website snapshot',
    title: 'Font Awesome',
    url: 'https://fontawesome.com/',
    description:
      'A vast library of icons for easy integration in web projects.',
  },
  {
    imgSrc: 'src/assets/thumbnails/icons/heroicons.png',
    alt: 'Heroicons website snapshot',
    title: 'Heroicons',
    url: 'https://heroicons.com/',
    description: 'Free, customizable icons for modern web and UI designs.',
  },
  {
    imgSrc: 'src/assets/thumbnails/icons/m3-icons.png',
    alt: 'M3 google fonts website snapshot',
    title: 'Material Design Icons',
    url: 'https://fonts.google.com/icons',
    description: 'Open-source icons, easy to use and style.',
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
