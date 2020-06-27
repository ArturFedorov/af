<template>
  <div class="video-wrapper">
    <video
      ref="promo"
      class="video"
      preload="auto"
      autoplay
      :muted="muted"
      loop>
      <source :src="getVideoSrc" type="video/mp4">
    </video>
    <div
      v-if="withSound"
      class="video-buttons">
      <a
        class="video-link"
        @click="muted=!muted">
        <SvgIcon
          v-if="muted"
          name="sound_on" />
        <SvgIcon
          v-else
          name="sound_off" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Video',
  props: {
    folder: {
      type: String,
      required: true
    },
    video: {
      type: String,
      required: true
    },
    withSound: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      muted: true
    }
  },
  computed: {
    getVideoSrc(): string {
      return require(`../../../../../../assets/videos/${this.folder}/${this.video}`);
    }
  }
});
</script>

<style lang="scss" scoped>
  .video {
    width: 100%;
    height: auto;

    &-buttons {
      display: flex;
      align-items: center;
      padding: $building-unit;
      background-color: $black;
      bottom: 0;
      width: 100%;
      border-top: $border-reversed;
    }

    &-link {
      display: flex;
      cursor: pointer;

      .svg-icon {
        fill: $white;
      }
    }

    &-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
    }
  }
</style>
