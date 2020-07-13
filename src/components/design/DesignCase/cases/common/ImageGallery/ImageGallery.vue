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
      width: 50%;
      margin-top: $building-unit-x2;

      &:nth-child(1) {
        margin-top: 0;
      }

      &:nth-child(2) {
        margin-top: 0;
      }

      @media ($tablet) {
        width: 100%;
        padding-right: 0;
        margin-top: 0;

        &:not(:last-child) {
          margin-bottom: $building-unit-x2;
        }
      }
    }

    &-image {
      width: 100%;
      float: left;
      height: auto;
    }
  }
</style>
