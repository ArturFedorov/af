import Vue from 'vue';

// abstract
import IntersectionObserver from '@/components/common/abstract/IntersectionObserver.vue';

// Local Components
import BigHeading from '@/components/common/BigHeading/BigHeading.vue';
import ImageCover from '@/components/common/ImageCover/ImageCover.vue';
import SvgIcon from './SvgIcon/SvgIcon.vue';

// Filters
import leadingZero from './filter/lead-zero.filter';

const components: { [key: string]: {} } = {
  BigHeading,
  ImageCover,
  SvgIcon,
  IntersectionObserver
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);


Vue.filter('leadingZero', leadingZero);

