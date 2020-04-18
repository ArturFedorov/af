<template>
  <div class="projects">
    <div ref="bg" class="projects-bg with-margin"></div>
    <div class="projects-content">
      <a
        class="projects-link"
        :class="{'hovered': listHovered}"
        v-for="(project, index) in projects"
        :key="project.name">
        <span class="h1-italic is-capitalized projects-index">{{index + 1 | leadingZero}}</span>
        <p
          class="h1-italic is-capitalized"
          @mouseenter="addBackground(project.url)"
          @mouseleave="removeImage">
          {{project.name}}
        </p>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'DesignProjects',
  data() {
    return {
      listHovered: false,
      projects:  [
        {name: 'feix', url: 'feix-horizontal.jpeg'},
        {name: 'one2', url: 'one2.png'},
        {name: 'elena krasnenko', url: 'elena.png'},
        {name: 'ice 9', url: 'ice.png'},
        {name: 'Fonts', url: 'feix-horizontal.jpeg'}
      ]
    }
  },
  mounted(): void {
    AnimationService.tweenLite.from('.projects-link', {
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      y: 1050,
      ease: AnimationService.easing.power1.easeInOut
    });
  },
  methods: {
    addBackground(url: string) {
      AnimationService.tweenLite.fromTo('.projects-bg', {
        opacity: 0,
        scale: 1.05,
        backgroundImage: `url('${require(`../assets/images/${url}`)}')`
      }, {
        opacity: 1,
        scale: 1,
        backgroundImage: `url('${require(`../assets/images/${url}`)}')`,
        ease: AnimationService.easing.power1.easeInOut
      })

      this.listHovered = true;
    },
    removeImage() {
      AnimationService.tweenLite.fromTo('.projects-bg', {
        opacity: 1,
        scale: 1,
      },{
        opacity: 0,
        scale: 1.05,
      });

      this.listHovered = false;
    }
  }
});
</script>

<style lang="scss" scoped>
  .projects {
    position: relative;
    display: flex;
    justify-content: center;

    &-bg {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      z-index: -1;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      overflow-y: scroll;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      transform-origin: center center;
    }

    &-content {
      padding: 2em 4em;
    }

    &-index {
      margin-right: 2em;

      @media ($tablet) {
        margin-right: 1em;
      }
    }

    &-link {
      display: flex;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 2em;
      }

      &.hovered {
        color: $white;
        transition: all 0.4s;
        opacity: 0.4;
      }

      &:hover {
        opacity: 1;
      }

      .h1-italic {
        @include fluid-type($min_width, $max_width, 34px, 124px);
        text-align: left;
        white-space: nowrap;
      }
    }
  }

</style>
