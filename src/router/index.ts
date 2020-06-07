import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export enum Routes {
  HOME = 'Home',
  PROJECTS = 'Projects',
  DESIGN_PROJECTS = 'Design_Projects',
  ABOUT = 'About',
  CONTACT = 'Contact',
  WORK = 'Work',
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
    path: '/contact',
    name: Routes.CONTACT,
    component: () => import(/* webpackChunkName: 'contact' */ '../views/Contact.vue')
  },
  {
    path: '/work',
    name: Routes.WORK,
    component: () => import(/* webpackChunkName: 'work' */ '../views/Work.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router;
