<template>
  <div class="one2nd">
    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one"></template>
      <template slot="two">
        <ArrowLink
          class="arrow-link design-link smaller-padding">
          <template slot="text">
            brand identity for music app
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
          <template slot="text">stylescapes</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="design-container">
          <h2 class="design-header-mobile">stylescapes</h2>
          <ImageGallery
            :folder="project.name"
            :images="styleScapeImages" />
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
          <template slot="text">animation</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="design-container">
          <div class="design-section is-half">
            <h2 class="design-header-mobile">animation</h2>
            <Video
              folder="one2nd"
              video="one2nd.mp4" />
          </div>
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one"></template>
      <template slot="two">
        <ArrowLink
          class="arrow-link feix-link smaller-pading">
          <template slot="text">
            more content will be soon...
          </template>
        </ArrowLink>
      </template>
    </GridRow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Overview from '@/components/design/DesignCase/cases/one2nd/Overview/Overview.vue';
import ImageGallery from '@/components/design/DesignCase/cases/common/ImageGallery/ImageGallery.vue';
import {Routes} from '@/router';
import {AnimationService} from '@/shared/services/animation.service';
import Video from '@/components/design/DesignCase/cases/common/Video/Video.vue';

export default Vue.extend({
  name: 'One2nd',
  components: {
    ImageGallery,
    Overview,
    Video
  },
  data() {
    return {
      Routes,
      project: this.$attrs,
      styleScapeImages: [
        'stylescape1.png',
        'stylescape2.png',
        'stylescape3.png',
        'stylescape4.png'
      ],
      printImages: [
        'poster1.png',
        'poster2.png',
        'poster3.png',
        'poster4.png',
        'poster5.png'
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
