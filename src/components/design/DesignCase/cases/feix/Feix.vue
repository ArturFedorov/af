<template>
  <div class="feix">
    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one"></template>
      <template slot="two">
        <ArrowLink
          class="arrow-link feix-link smaller-pading">
          <template slot="text">
            brand identity for digital product
          </template>
          <template slot="caption">
            <span
              class="is-small is-margin-right-x5"
              v-for="topic in project.topics"
              :key="topic">
              {{ topic }}
            </span>
          </template>
        </ArrowLink>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">overview</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="design-container">
          <h2 class="design-header-mobile">overview</h2>
          <Overview />
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">logo</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="design-container">
          <h2 class="design-header-mobile">logo</h2>
          <ImageGallery
            :folder="project.name"
            :images="logoImages" />
        </div>
      </template>
    </GridRow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Routes} from '@/router';
import {AnimationService} from '@/shared/services/animation.service';
import ImageGallery from '@/components/design/DesignCase/cases/common/ImageGallery/ImageGallery.vue';
import Overview from '@/components/design/DesignCase/cases/feix/Overview/Overview.vue';

export default Vue.extend({
  name: 'Feix',
  components: {
    ImageGallery,
    Overview
  },
  data() {
    return {
      Routes,
      project: this.$attrs,
      logoImages: [
        'logo-white-no-caption.png',
        'logo-purple-no-caption.png',
        'logo-purple-caption.png',
        'logo-white-caption.png'
      ]
    }
  },
  mounted() {
    AnimationService.removeCover();
  }
});
</script>

<style lang="scss" scoped>
  .feix {
    &-link {
      &.smaller-pading {
        padding-left: $building-unit-x5;

        @media ($tablet) {
          padding-left: $building-unit-x3;
        }
      }
    }
  }
</style>
