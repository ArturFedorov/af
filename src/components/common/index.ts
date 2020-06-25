import Vue from 'vue';

// abstract
import IntersectionObserver from '@/components/common/abstract/IntersectionObserver.vue';

// Local Components
import ArrowLink from '@/components/common/ArrowLink/ArrowLink.vue';
import BigHeading from '@/components/common/BigHeading/BigHeading.vue';
import Button from '@/components/common/Button/Button.vue';
import CustomCursor from '@/components/common/CustomCursor/CustomCursor.vue';
import ImageCover from '@/components/common/ImageCover/ImageCover.vue';
import GridRow from '@/components/common/GridRow/GridRow.vue';
import Label from '@/components/common/Label/Label.vue';
import Paragraph from '@/components/common/Paragraph/Paragraph.vue';
import SvgIcon from './SvgIcon/SvgIcon.vue';
import Rating from '@/components/common/Rating/Rating.vue';

// Filters
import leadingZero from './filter/lead-zero.filter';
import uniqueId from './filter/uniqueId.filter';

const components: { [key: string]: {} } = {
  ArrowLink,
  BigHeading,
  Button,
  CustomCursor,
  ImageCover,
  GridRow,
  Label,
  Paragraph,
  Rating,
  SvgIcon,
  IntersectionObserver
};

const filters: { [key: string]: Function } = {
  leadingZero,
  uniqueId
}

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);

Object.keys(filters).forEach(filterName =>
  Vue.filter(filterName, filters[filterName])
);


