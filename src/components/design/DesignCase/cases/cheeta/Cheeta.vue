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
        <div class="design-container">
          <div class="design-section is-half">
            <h2 class="design-header-mobile">promo</h2>
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
        <div class="design-container">
          <h2 class="design-header-mobile">print</h2>
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
          <template slot="text">web</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="design-container">
          <h2 class="design-header-mobile">web</h2>
          <ImageGallery
            :folder="project.name"
            :images="webImages" />
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
        <div class="design-container">
          <h2 class="design-header-mobile">mobile</h2>
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
        <div class="design-container">
          <div class="design-section is-half">
            <h2 class="design-header-mobile">animation</h2>
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
        'Mobile5.png',
        'Mobile6.png'
      ],
      webImages: [
        'web1.png',
        'web2.png',
        'web3.png'
      ]
    }
  },
  mounted() {
    AnimationService.removeCover();
  }
});
</script>

<style lang="scss" scoped>
</style>
