<template>
  <div class="ball"></div>
</template>
<style lang="scss" scoped>
  $ball-size: 45px;
  $ball-size-tablet: 20px;
  $ball-size-mobile: 10px;

  .ball {
    display: inline-block;
    width: $ball-size;
    height: $ball-size;
    border-radius: 50%;
    background-color: $red;
    animation: bounce 0.5s ease-in-out;
    transition: all 0.4s;

    @media($tablet) {
      width: $ball-size-tablet;
      height: $ball-size-tablet;
    }

    @media($mobile) {
      width: $ball-size-mobile;
      height: $ball-size-mobile;
    }
  }

  @keyframes bounce {
    0% {
      opacity: 0;
      transform: scale(0.3) translate3d(0,0,0);
    }

    50% {
      opacity: 0.9;
      transform: scale(1.1);
    }

    80% {
      opacity: 1;
      transform: scale(0.89);
    }

    100% {
      opacity: 1;
      transform: scale(1) translate3d(0,0,0);
    }
  }
</style>
