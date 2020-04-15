import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';
import {SET_SHOW_NAVIGATION} from '@/store/ui';

Vue.use(VueRouter);

export enum Routes {
  HOME = 'Home',
  PROJECTS = 'Projects',
  CONTACT = 'Contact',
  DESIGN = 'Design',
  DEVELOPMENT = 'Development',
  YEARS = 'Years',
  YEAR = 'Year',
  OVERVIEW = 'Overview',
  SKILLS = 'Skills'
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: Routes.HOME,
    component: Home
  },
  {
    path: '/projects',
    name: Routes.PROJECTS,
    component: () => import(/* webpackChunkName: 'about' */ '../views/Projects.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  store.commit(SET_SHOW_NAVIGATION, false);
  next();
});

export default router;
