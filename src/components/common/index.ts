import Vue from 'vue';

// Local Components
import AngleButton from './AngleButton/AngleButton.vue';
import SvgIcon from './SvgIcon/SvgIcon.vue';
import Date from './Date/Date.vue';
import NumberedStep from '@/components/common/NumberedStep/NumberedStep.vue';

const components: { [key: string]: {} } = {
  AngleButton,
  Date,
  SvgIcon,
  NumberedStep
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);


// Local Directives
import './directive/scroll.directive';
