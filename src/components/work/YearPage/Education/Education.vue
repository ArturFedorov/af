<template>
  <div class="education">
    <div class="education-header">
      <h2>{{ education.name }}</h2>
      <h1 class="education-number">{{ orderNumber | leadingZero }}</h1>
    </div>
    <h4 class="h4-bold">
      Courses
    </h4>
    <div class="education-content">
      <a
        target="_blank"
        v-for="course in education.courses"
        :key="course"
        class="h3 link is-blue p-body education-content-link">
        {{ course }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Education',
  props: {
    education: {
      required: true
    },
    orderNumber: {
      type: Number,
      default: 1
    }
  }
});
</script>

<style lang="scss" scoped>
  .education {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2em;
    }

    &-number {
      opacity: 0.2;
    }

    .h4-bold {
      margin-bottom: 1.5em;
    }

    &-content {
      display: flex;
      flex-direction: column;

      &-link {
        margin-bottom: 0.5em;
      }
    }
  }
</style>
