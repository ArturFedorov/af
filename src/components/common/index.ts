import Vue from 'vue';

// Local Components
import AngleButton from './AngleButton/AngleButton.vue';
import BigHeading from '@/components/common/BigHeading/BigHeading.vue';
import CoverLoader from '@/components/common/CoverLoader/CoverLoader.vue';
import SvgIcon from './SvgIcon/SvgIcon.vue';
import Date from './Date/Date.vue';
import NumberedStep from '@/components/common/NumberedStep/NumberedStep.vue';

// Filters
import leadingZero from './filter/lead-zero.filter';

const components: { [key: string]: {} } = {
  AngleButton,
  BigHeading,
  CoverLoader,
  Date,
  SvgIcon,
  NumberedStep
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);


Vue.filter('leadingZero', leadingZero);
// Local Directives
import './directive/scroll.directive';
