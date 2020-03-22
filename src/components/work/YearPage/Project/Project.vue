<template>
  <div class="project">
    <div class="project-header">
      <h2>{{ project.name }}</h2>
      <h1 class="project-number">{{ orderNumberString }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    project: {
      required: true
    },
    orderNumber: {
      type: Number,
      default: 1
    }
  },
  computed: {
    orderNumberString(): string {
      return this.orderNumber < 10 ? `0${this.orderNumber}` : this.orderNumber.toString();
    }
  }
});
</script>

<style lang="scss" scoped>
  .project {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2em;
    }

    &-number {
      opacity: 0.2;
    }
  }
</style>
