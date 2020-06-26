<template>
  <div class="cheeta">
    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
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
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">promo</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <div class="cheeta-section is-half">
            <h2 class="cheeta-header-mobile">promo</h2>
            <Video
              :withSound="true"
              folder="cheeta"
              video="cheeta_promo.mp4" />
          </div>
        </div>
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
        <div class="cheeta-container">
          <h2 class="cheeta-header-mobile">overview</h2>
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
        <div class="cheeta-container">
          <h2 class="cheeta-header-mobile">logo</h2>
          <ImageGallery
            :folder="project.name"
            :images="logoImages" />
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">print</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <h2 class="cheeta-header-mobile">print</h2>
          <ImageGallery
            :folder="project.name"
            :images="printImages" />
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">mobile</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <h2 class="cheeta-header-mobile">mobile</h2>
          <ImageGallery
            :folder="project.name"
            :images="mobileImages" />
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one">
        <ArrowLink class="arrow-link is-aligned-right">
          <template slot="text">animation</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="cheeta-container">
          <div class="cheeta-section is-one-forth">
            <h2 class="cheeta-header-mobile">animation</h2>
            <Video
              folder="cheeta"
              video="poster.mp4" />
          </div>
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
import ImageGallery from '@/components/design/DesignCase/cases/common/ImageGallery/ImageGallery.vue';
import Video from '@/components/design/DesignCase/cases/common/Video/Video.vue';

export default Vue.extend({
  name: 'Cheeta',
  components: {
    ImageGallery,
    Overview,
    Video
  },
  data() {
    return {
      Routes,
      project: this.$attrs,
      logoImages: [
        'logo-black-caption.png',
        'logo-white-caption.png',
        'logo-white-no-caption.png',
        'logo-black-no-caption.png'
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

    console.log(this.$refs.promo)
  }
});
</script>

<style lang="scss" scoped>
  .cheeta {
    &-header-mobile {
      display: none;

      @media ($mobile) {
        margin-bottom: $building-unit-x2;
        display: flex;
      }
    }

    &-container {
      padding: $building-unit-x4;
      width: 100%;
      display: flex;

      @media ($mobile) {
        padding: $building-unit-x2;
        flex-direction: column;
      }
    }

    &-section {
      padding-right: $building-unit-x3;

      @media($mobile) {
        padding-right: 0;
      }

      &.is-one-forth {
        width: 25%;

        @media($mobile) {
          width: 100%;
        }
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
