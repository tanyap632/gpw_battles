import { createRouter, createWebHistory } from 'vue-router'
import HomePages from '../page/home_page.vue'
import CardDetail1941 from '../components/card_detail-1941.vue'
import CardDetail1942 from '../components/card_detail-1942.vue'
import CardDetail1943 from '../components/card_detail-1943.vue'
import CardDetail1944 from '../components/card_detail-1944.vue'
import CardDetail1945 from '../components/card_detail-1945.vue'
import Operacion1941 from '../components/operacion_1941.vue'
import Operacion1942 from '../components/operacion_1942.vue'
import Operacion1943 from '../components/operacion_1943.vue'
import Operacion1944 from '../components/operacion_1944.vue'
import Operacion1945 from '../components/operacion_1945.vue'

const routes = [
  {
    path: '/',
    component: HomePages,
    name: 'home',
  },
  {
    path: '/card-detail-1941/:id',
    component: CardDetail1941,
    name: 'card-detail-1941',
  },
  {
    path: '/card-detail-1942/:id',
    component: CardDetail1942,
    name: 'card-detail-1942',
  },
  {
    path: '/card-detail-1943/:id',
    component: CardDetail1943,
    name: 'card-detail-1943',
  },
  {
    path: '/card-detail-1944/:id',
    component: CardDetail1944,
    name: 'card-detail-1944',
  },
  {
    path: '/card-detail-1945/:id',
    component: CardDetail1945,
    name: 'card-detail-1945',
  },
  {
    path: '/operacion1941',
    component: Operacion1941,
    name: 'operacion-1941',
  },
  {
    path: '/operacion1942',
    component: Operacion1942,
    name: 'operacion-1942',
  },
  {
    path: '/operacion1943',
    component: Operacion1943,
    name: 'operacion-1943',
  },
  {
    path: '/operacion1944',
    component: Operacion1944,
    name: 'operacion-1944',
  },
  {
    path: '/operacion1945',
    component: Operacion1945,
    name: 'operacion-1945',
  },
]

const router = createRouter({
  history: createWebHistory('/'), // или другой базовый путь
  routes,
})

export default router
