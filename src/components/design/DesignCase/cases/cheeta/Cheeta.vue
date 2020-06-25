<template>
  <div class="cheeta">
    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one"></template>
      <template slot="two">
        <ArrowLink
          class="arrow-link"
          :link="Routes.CONTACT">
          <template slot="text">
            A brand identity for the digital agency
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
      :isBottom="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">promo</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <div class="cheeta-section is-half">
            <video
              class="cheeta-video"
              preload="auto"
              autoplay
              muted
              loop>
              <source src="../../../../../assets/videos/cheeta/cheeta_promo.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">overview</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <Overview />
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">logo</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <ImageGallery
            :folder="project.name"
            :images="logoImages" />
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">print</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <ImageGallery
            :folder="project.name"
            :images="printImages" />
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">mobile</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <ImageGallery
            :folder="project.name"
            :images="mobileImages" />
        </div>
      </template>
    </GridRow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Routes} from '@/router';
import {AnimationService} from '@/shared/services/animation.service';
import Overview from '@/components/design/DesignCase/cases/cheeta/Overview/Overview.vue';
import ImageGallery from '@/components/design/DesignCase/cases/cheeta/ImageGallery/ImageGallery.vue';

export default Vue.extend({
  name: 'Cheeta',
  components: {
    ImageGallery,
    Overview
  },
  data() {
    return {
      Routes,
      project: this.$attrs,
      logoImages: [
        'logo-black-caption.png',
        'logo-white-caption.png',
        'logo-white-no-caption.png'
      ],
      printImages: [
        'poster_black.png',
        'poster_red.png',
        'poster_3d.png',
        'card_back.png',
        'card1.png',
        'card2.png'
      ],
      mobileImages: [
        'Mobile2.png',
        'Mobile3.png',
        'Mobile4.png',
        'Mobile5.png'
      ]
    }
  },
  mounted() {
    AnimationService.removeCover();
  }
});
</script>

<style lang="scss" scoped>
  .cheeta {
    &-container {
      padding: $building-unit-x4;
      width: 100%;
      display: flex;

      @media ($mobile) {
        padding: $building-unit;
      }
    }

    &-section {
      padding-right: $building-unit-x3;

      @media($mobile) {
        padding-right: 0;
      }

      &.is-one-forth {
        width: 25%;
      }

      &.is-half {
        width: 50%;

        @media($mobile) {
          width: 100%;
        }
      }

      &.is-three-forth {
        width: 75%;
      }
    }

    &-video {
      width: 100%;
      height: auto;
    }
  }
</style>
