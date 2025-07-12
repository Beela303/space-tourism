import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
import CrewView from '@/views/CrewView.vue'
import TechnologyView from '@/views/TechnologyView.vue'

import Moon from '../components/Moon.vue'
import Mars from '../components/Mars.vue'
import Europa from '../components/Europa.vue'
import Titan from '../components/Titan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView,
    },
    {
      path: '/crew',
      name: 'crew',
      component: CrewView,
    },
    {
      path: '/technology',
      name: 'technology',
      component: TechnologyView,
    },
    {
      path: '/destination/moon',
      name: 'moon',
      component: Moon,
    },
    {
      path: '/destination/mars',
      name: 'mars',
      component: Mars,
    },
    {
      path: '/destination/europa',
      name: 'europa',
      component: Europa,
    },
    {
      path: '/destination/titan',
      name: 'titan',
      component: Titan,
    },
  ],
})

export default router
