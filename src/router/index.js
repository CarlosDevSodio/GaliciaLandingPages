import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import { h, resolveComponent } from 'vue';
import publicRoutes from './public-routes';
import NotFound from '@/modules/public/error-views/NotFound.vue';
import Galery from '../components/galery/Galery.vue';


const routes = [
  {
    path: '',
    redirect: '/home',
    
  },
  {
    path: '/',
    component: {
      render() {
        return h(resolveComponent("router-view"));
      }
    },
    children: [
      ...publicRoutes.map(route => {
        route.meta.requireAuth = false;
        return { ...route };
      }),
    ]
  },
    {
    path: '/galery',
    name: 'galery',
    component: Galery
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

