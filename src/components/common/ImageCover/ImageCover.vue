<template>
  <div
    ref="image" class="image"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import hoverEffect from 'hover-effect';
export default Vue.extend({
  name: 'ImageCover',
  props: {
    image1: {
      type: String,
      default: () => require('../../../assets/images/pink-rect.png')
    },
    image2: {
      type: String,
      default: () => require('../../../assets/images/blue-rect.png')
    },
    imagesRatio: {
      type: Number,
      default: 1.1
    }
  },
  mounted(): void {
    new hoverEffect({
      parent: this.$refs.image as Element,
      intensity: 0.2,
      image1: this.image1,
      image2: this.image2,
      displacementImage: require('../../../assets/images/heightMap.png'),
      imagesRatio: this.imagesRatio
    });
  }
});

</script>

