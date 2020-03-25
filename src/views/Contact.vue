<template>
  <div class="contact">
    <BigHeading
      id="slideUp"
      colorHint="is-orange"
      v-vpshow>
      <template slot="first-word">Contact</template>
      <template slot="second-word">Me</template>
    </BigHeading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Contact'
});
</script>

<style lang="scss" scoped>
  .contact {
    padding: 2em;
    border-bottom: $border;
    overflow: hidden;
  }
</style>
