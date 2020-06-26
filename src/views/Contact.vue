<template>
  <div class="contact grid">

    <GridRow :mobileHiddenMain="true">
      <template slot="one">
        <Button
          class="is-flipped"
          :isReversed="!isLightMode"
          @click="goTo(Routes.HOME)">
          home
        </Button>
      </template>
      <template slot="two">
        <div
          class="contact-section scale"
          ref="wrapper">
          <div ref="contact">
            <BigHeading>Contact</BigHeading>
          </div>
        </div>
      </template>
      <template slot="three">
        <ArrowLink
          class="arrow-link"
          link="github"
          @click="goExternal('https://github.com/ArturFedorov')">
          <template slot="text">github</template>
        </ArrowLink>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one">
        <ArrowLink
          class="arrow-link"
          link="github"
          :withArrow="true">
        </ArrowLink>
      </template>
      <template slot="two">
        <ArrowLink
          class="arrow-link"
          link="github"
          @click="goExternal('https://www.facebook.com/artur.fedorov/')">
          <template slot="text">facebook</template>
        </ArrowLink>
      </template>
    </GridRow>

    <GridRow
      :noLeft="true"
      :isAlignedRight="true"
      :isBottom="true">
      <template slot="two">
        <ArrowLink
          class="arrow-link"
          link="github"
          @click="goExternal('https://www.linkedin.com/in/arturfedorov/')">
          <template slot="text">linkedin</template>
        </ArrowLink>
      </template>
      <template slot="three">
        <ArrowLink
          class="arrow-link"
          link="github"
          :withArrow="true">
        </ArrowLink>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one">
        <ArrowLink
          class="arrow-link"
          link="github"
          :withArrow="true">
        </ArrowLink>
      </template>
      <template slot="two">
        <ArrowLink
          class="arrow-link"
          link="github"
          @click="goExternal('https://www.instagram.com/surfandturf_design/')">
          <template slot="text">instagram</template>
        </ArrowLink>
      </template>
    </GridRow>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
import {uiMode} from '@/components/common/mixins/uiMode.mixin';
import { Routes } from '@/router';
import {routeMixin} from '@/components/common/mixins/route.mixin';
export default Vue.extend({
  name: 'Contact',
  mixins: [uiMode, routeMixin],
  data() {
    return {
      Routes
    }
  },
  methods: {
    goExternal(url: string) {
      window.open(url, '_blank');
    }
  },
  mounted() {
    const contact = this.$refs.contact as HTMLElement;
    let wrapper = this.$refs.wrapper as HTMLElement;
    wrapper = AnimationService.appenCloneToParrent(wrapper, contact, 6);
    AnimationService.runningTimeline(wrapper, -wrapper.offsetWidth, 30);

    AnimationService.removeCover();
  }
});
</script>

<style lang="scss" scoped>
  .contact {
    &-section {
      display: flex;
    }
  }
</style>
