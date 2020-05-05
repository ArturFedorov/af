import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';
import {SET_SHOW_NAVIGATION} from '@/store/ui';

Vue.use(VueRouter);

export enum Routes {
  HOME = 'Home',
  PROJECTS = 'Projects',
  DESIGN_PROJECTS = 'Design_Projects',
  ABOUT = 'About',
  YEAR = 'Year',
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: Routes.HOME,
    component: Home
  },
  {
    path: '/about',
    name: Routes.ABOUT,
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: Routes.PROJECTS,
    component: () => import(/* webpackChunkName: 'projects' */ '../views/Experience.vue')
  },
  {
    path: '/design-projects',
    name: Routes.DESIGN_PROJECTS,
    component: () => import(/* webpackChunkName: 'design' */ '../views/DesignProjects.vue')
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
