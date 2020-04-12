import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Years from '@/components/work/Years/Years.vue';
import YearPage from '@/components/work/YearPage/YearPage.vue';

Vue.use(VueRouter);

export enum Routes {
  HOME = 'Home',
  WORK = 'Work',
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
    path: '/work',
    name: Routes.WORK,
    component: () => import(/* webpackChunkName: 'about' */ '../views/Work.vue'),
    redirect: {name: Routes.YEARS},
    children: [{
      path: 'years',
      name: Routes.YEARS,
      components: {
        work: Years
      }
    },
    {
      path: 'years/:id',
      name: Routes.YEAR,
      components: {
        work: YearPage
      },
      props: { work: true},
    }]
  },
  {
    path: '/development',
    name: Routes.DEVELOPMENT,
    component: () => import(/* webpackChunkName: 'about' */ '../views/Development.vue')
  },
  {
    path: '/design',
    name: Routes.DESIGN,
    component: () => import(/* webpackChunkName: 'about' */ '../views/Design.vue')
  },
  {
    path: '/contact',
    name: Routes.CONTACT,
    component: () => import(/* webpackChunkName: 'about' */ '../views/Contact.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
