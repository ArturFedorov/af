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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
