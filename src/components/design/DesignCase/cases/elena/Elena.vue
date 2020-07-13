<template>
  <div class="elena">
    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true">
      <template slot="one"></template>
      <template slot="two">
        <ArrowLink
          class="arrow-link">
          <template slot="text">
            landing page for psychotherapist
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
          <template slot="text">animation</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div class="design-container">
          <div class="design-section is-half">
            <h2 class="design-header-mobile">animation</h2>
            <Video
              folder="elena"
              video="elena.mp4" />
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
import {Routes} from '@/router';
import {AnimationService} from '@/shared/services/animation.service';
import Video from '@/components/design/DesignCase/cases/common/Video/Video.vue';

export default Vue.extend({
  name: 'Elena',
  components: {
    Video
  },
  data() {
    return {
      Routes,
      project: this.$attrs
    }
  },
  mounted() {
    AnimationService.removeCover();
  }
});
</script>

<style lang="scss" scoped>

</style>
