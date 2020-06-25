<template>
  <div class="image-gallery">
    <div
      class="image-gallery-item"
      v-for="image in images"
      :key="image | uniqueId">
      <img
        class="image-gallery-image"
        :src="getImageSrc(image)"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ImageGallery',
  props: {
    folder: {
      type: String,
      required: true
    },
    images: {
      type: Array as () => string[],
      required: true
    }
  },
  methods: {
    getImageSrc(image: string) {
      return require(`../../../../../../assets/images/${this.folder}/${image}`);
    }
  }
});
</script>

<style lang="scss" scoped>
  .image-gallery {
    display: flex;
    flex-wrap: wrap;

    &-item {
      padding-right: $building-unit-x3;
      width: 25%;
      margin-bottom: $building-unit;

      @media ($tablet) {
        width: 50%;
      }

      @media ($mobile) {
        width: 100%;
        padding-right: 0;
      }
    }

    &-image {
      width: 100%;
      height: auto;
    }
  }
</style>
