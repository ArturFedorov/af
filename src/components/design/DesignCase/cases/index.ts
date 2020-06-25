import Vue from 'vue';

// Local Components
import Cheeta from '@/components/design/DesignCase/cases/cheeta/Cheeta.vue';
import Feix from '@/components/design/DesignCase/cases/feix/Feix.vue';
import One2nd from '@/components/design/DesignCase/cases/one2nd/One2nd.vue';
import Ice9 from '@/components/design/DesignCase/cases/ice9/Ice9.vue';
import Elena from '@/components/design/DesignCase/cases/elena/Elena.vue';

const components: { [key: string]: {} } = {
  Cheeta,
  Feix,
  One2nd,
  Ice9,
  Elena
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);



