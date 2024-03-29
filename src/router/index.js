import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CountAdd from '@/views/Count.vue'
import cityApi from '@/views/CityApi.vue'
import Shopping from '@/views/shopping.vue'
import ShoppingCar from '@/views/shoppingCar.vue'
import ShoppingCarCheck from '@/views/ShoppingCarCheck.vue'
import BuySuccess from '@/views/BuySuccess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/count',
      name: 'count',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CountAdd,
    },
    {
      path: '/cityApi',
      name: 'cityApi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: cityApi,
    },
    {
      path: '/shopping',
      name: 'shopping',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Shopping,
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ShoppingCar,
    },
    {
      path: '/shoppingCarCheck',
      name: 'shoppingCarCheck',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ShoppingCarCheck,
    },
    {
      path: '/buysuccess',
      name: 'buysuccess',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BuySuccess,
    }
  ]
})

export default router
