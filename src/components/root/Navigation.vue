<template>
  <div class="navigation">
    <router-link
      to="/work"
      class="h3-light navigation-link">
      work
    </router-link>
    <router-link
      to="#"
      class="h3-light navigation-link">
      development
    </router-link>
    <router-link
      to="#"
      class="h3-light navigation-link">
      design
    </router-link>
    <router-link
      to="#"
      class="h3-light navigation-link">
      contact
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
  .navigation {
    display: flex;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);

    &-link {
      color: $black;
      text-decoration: none;
      width: 200px;
      flex: 1;

      &:not(:last-child) {
        margin-right: 50px;
      }
    }
  }

  .router-link-active {
    font-weight: $font-bold;
  }
</style>
