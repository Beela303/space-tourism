import { createRouter, createWebHistory } from 'vue-router'

//PAGES
import HomeView from '../views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
import CrewView from '@/views/CrewView.vue'
import TechnologyView from '@/views/TechnologyView.vue'

//PLANETS
import Moon from '../components/Moon.vue'
import Mars from '../components/Mars.vue'
import Europa from '../components/Europa.vue'
import Titan from '../components/Titan.vue'

//CREW
import DouglasHurley from '@/components/DouglasHurley.vue'
import MarkShuttleworth from '@/components/MarkShuttleworth.vue'
import VictorGlover from '@/components/VictorGlover.vue'
import AnoushehAnsari from '@/components/AnoushehAnsari.vue'

//TECHNOLOGY
import Vehicle from '@/components/Vehicle.vue'
import SpacePort from '@/components/SpacePort.vue'
import SpaceCapsule from '@/components/SpaceCapsule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    //PAGES

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

    // DESTINATION
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

    //CREW
    {
      path: '/crew/Douglas-Hurley',
      name: 'DouglasHurley',
      component: DouglasHurley,
    },
    {
      path: '/crew/Mark-Shuttleworth',
      name: 'MarkShuttleworth',
      component: MarkShuttleworth,
    },
    {
      path: '/crew/Victor-Glover',
      name: 'VictorGlover',
      component: VictorGlover,
    },
    {
      path: '/crew/Anousheh-Ansari',
      name: 'AnoushehAnsari',
      component: AnoushehAnsari,
    },

    //TECHNOLOGY
    {
      path: '/technology/vehicle',
      name: 'vehicle',
      component: Vehicle,
    },
    {
      path: '/technology/spaceport',
      name: 'spaceport',
      component: SpacePort,
    },
    {
      path: '/technology/spacecapsule',
      name: 'spacecapsule',
      component: SpaceCapsule,
    },
  ],
})

export default router
