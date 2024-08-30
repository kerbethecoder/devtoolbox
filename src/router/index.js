import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Developer',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/inspirations',
      name: 'Inspirations',
      component: () => import('../views/InspirationsView.vue'),
    },
    {
      path: '/colors',
      name: 'Colors',
      component: () => import('../views/ColorsView.vue'),
    },
    {
      path: '/fonts',
      name: 'Fonts',
      component: () => import('../views/FontsView.vue'),
    },
    {
      path: '/illustrations',
      name: 'Illustrations',
      component: () => import('../views/IllustrationsView.vue'),
    },
    {
      path: '/icons',
      name: 'Icons',
      component: () => import('../views/IconsView.vue'),
    },
    {
      path: '/backgrounds',
      name: 'Backgrounds',
      component: () => import('../views/BackgroundsView.vue'),
    },
    {
      path: '/UIs',
      name: 'UIs',
      component: () => import('../views/UIsView.vue'),
    },
    {
      path: '/templates',
      name: 'Templates',
      component: () => import('../views/TemplatesView.vue'),
    },
  ],
});

export default router;
