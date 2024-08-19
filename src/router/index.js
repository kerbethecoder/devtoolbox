import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/inspirations',
      name: 'inspirations',
      component: () => import('../views/InspirationsView.vue'),
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import('../views/ColorsView.vue'),
    },
    {
      path: '/fonts',
      name: 'fonts',
      component: () => import('../views/FontsView.vue'),
    },
    {
      path: '/illustrations',
      name: 'illustrations',
      component: () => import('../views/IllustrationsView.vue'),
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('../views/IconsView.vue'),
    },
    {
      path: '/backgrounds',
      name: 'backgrounds',
      component: () => import('../views/BackgroundsView.vue'),
    },
    {
      path: '/UIs',
      name: 'UIs',
      component: () => import('../views/UIsView.vue'),
    },
    {
      path: '/templates',
      name: 'templates',
      component: () => import('../views/TemplatesView.vue'),
    },
  ],
});

export default router;
