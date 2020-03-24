import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Years from '@/components/work/Years/Years.vue';
import YearPage from '@/components/work/YearPage/YearPage.vue';

Vue.use(VueRouter);

export enum Routes {
  HOME = 'Home',
  WORK = 'Work',
  DESIGN = 'Design',
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
    path: '/design',
    name: Routes.DESIGN,
    component: () => import(/* webpackChunkName: 'about' */ '../views/Design.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
