<template>
  <div class="home grid">
    <div class="grid-row">
     <div class="grid-row-section">
       <BigHeading>Developer</BigHeading>
     </div>
      <div class="grid-row-section is-small with-border-left is-bottom ">
        <ArrowLink
          :link="Routes.WORK">
          <template slot="text">development</template>
          <template slot="caption">9 projects</template>
        </ArrowLink>
      </div>
    </div>

    <div class="grid-row">
      <div class="grid-row-section is-small with-border-right is-bottom">
        <ArrowLink
          :link="Routes.DESIGN_PROJECTS">
          <template slot="text">design</template>
          <template slot="caption">4 projects</template>
        </ArrowLink>
      </div>
      <div class="grid-row-section">
        <BigHeading>Designer</BigHeading>
      </div>
    </div>

    <div class="grid-row">
      <div class="grid-row-section is-bottom is-aligned-right">
        <ArrowLink :link="Routes.CONTACT">
          <template slot="text">contact</template>
        </ArrowLink>
      </div>
      <div class="grid-row-section is-small with-border-left"></div>
    </div>

    <div class="grid-row">
      <div class="grid-row-section is-small with-border-right"></div>
      <div class="grid-row-section is-bottom">
        <ArrowLink :link="Routes.ABOUT">
          <template slot="text">about</template>
        </ArrowLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Routes} from '@/router';
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      Routes
    }
  }
});
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    position: relative;
  }
</style>
