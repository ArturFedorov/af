import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '@/views/Contact.vue';
import Work from '@/views/Work.vue';
import Design from '@/views/Design.vue';
import NotFound from '@/components/root/404/NotFound.vue';
import DesignCase from '@/components/design/DesignCase/DesignCase.vue';

Vue.use(VueRouter);

export enum Routes {
  LOADER = 'Loader',
  HOME = 'Home',
  PROJECTS = 'Projects',
  DESIGN_PROJECTS = 'Design_Projects',
  DESIGN_CASE = 'Design_Case',
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
    component: Contact
  },
  {
    path: '/work',
    name: Routes.WORK,
    component: Work
  },
  {
    path: '/design',
    name: Routes.DESIGN_PROJECTS,
    component: Design,
  },
  {
    path: '/design/:id',
    props: true,
    name: Routes.DESIGN_CASE,
    component: DesignCase
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
  routes
});


export default router;
