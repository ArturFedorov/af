<template>
  <div
    class="grid-row footer"
    :class="{'dark': !isLightMode}">
    <div class="grid-row-section-cover start-animate"></div>
    <div class="footer-caption grid-row-section is-small">
      <p>Artur Fedorov.</p>
      <p>Saint-Petersburg based.</p>
      <p>Ready for new challenges.</p>
    </div>
    <div class="grid-row-section is-small footer-section">
      <Button
        :isReversed="isLightMode"
        @click="toggleMode">
        {{buttonText}} mode
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {IS_LIGHT_MODE, SET_UI_MODE} from '@/store/ui';
import {UiMode} from '@/shared/enums/uiMode';

export default Vue.extend({
  name: 'Footer',
  computed: {
    isLightMode(): boolean {
      return this.$store.getters[IS_LIGHT_MODE]
    },
    buttonText(): string {
      return this.isLightMode ? 'dark' : 'light';
    }
  },
  methods: {
    toggleMode() {
      this.$store.commit(SET_UI_MODE, this.isLightMode ? UiMode.DARK : UiMode.LIGHT);
    }
  }
});
</script>

<style lang="scss" scoped>
  .footer {
    height: $row-height;
    align-items: center;
    border-bottom: 0;
    border-top: $border;
    transition: $default-transition;

    &-caption {
      padding: $padding;

      @media ($mobile) {
        padding: $padding-mobile;
      }
    }

    &-section {
      height: 100%;
      margin-left: auto;
    }

    //dark mode

    &.dark {
      background-color: $black;
      border-top: $white;

      .footer {
        border-top: $border-reversed;

        &-caption {
          color: $white;
        }
      }
    }
  }
</style>
