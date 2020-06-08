import Vue from 'vue';

// abstract
import IntersectionObserver from '@/components/common/abstract/IntersectionObserver.vue';

// Local Components
import BigHeading from '@/components/common/BigHeading/BigHeading.vue';
import Button from '@/components/common/Button/Button.vue';
import CustomCursor from '@/components/common/CustomCursor/CustomCursor.vue';
import ImageCover from '@/components/common/ImageCover/ImageCover.vue';
import GridRow from '@/components/common/GridRow/GridRow.vue';
import Label from '@/components/common/Label/Label.vue';
import ArrowLink from '@/components/common/ArrowLink/ArrowLink.vue';
import SvgIcon from './SvgIcon/SvgIcon.vue';

// Filters
import leadingZero from './filter/lead-zero.filter';

const components: { [key: string]: {} } = {
  BigHeading,
  Button,
  CustomCursor,
  ImageCover,
  GridRow,
  Label,
  SvgIcon,
  ArrowLink,
  IntersectionObserver
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);


Vue.filter('leadingZero', leadingZero);

