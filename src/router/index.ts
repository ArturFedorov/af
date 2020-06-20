import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '@/components/root/404/NotFound.vue';

Vue.use(VueRouter);

export enum Routes {
  LOADER = 'Loader',
  HOME = 'Home',
  PROJECTS = 'Projects',
  DESIGN_PROJECTS = 'Design_Projects',
  CONTACT = 'Contact',
  WORK = 'Work',
  EMPTY = 'Empty'
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: Routes.HOME,
    component: Home
  },
  {
    path: '/contact',
    name: Routes.CONTACT,
    component: () => import(/* webpackChunkName: 'contact' */ '../views/Contact.vue')
  },
  {
    path: '/work',
    name: Routes.WORK,
    component: () => import(/* webpackChunkName: 'work' */ '../views/Work.vue')
  },
  {
    path: '/design',
    name: Routes.DESIGN_PROJECTS,
    component: () => import(/* webpackChunkName: 'work' */ '../views/Design.vue')
  },
  {
    path: '*',
    name: Routes.EMPTY,
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
});


export default router;
