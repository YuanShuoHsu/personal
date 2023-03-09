<script setup>
import { useStore } from "./../stores/pinia.js";
import { storeToRefs } from "pinia";
const store = useStore();
const { cardActive } = storeToRefs(store);

const closeCard = () => {
  cardActive.value = "";
};
</script>

<template>
  <div class="background" @click="closeCard">
    <div class="bubbles">
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 24"></span>
      <span style="--i: 10"></span>
      <span style="--i: 14"></span>
      <span style="--i: 23"></span>
      <span style="--i: 18"></span>
      <span style="--i: 16"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
      <span style="--i: 22"></span>
      <span style="--i: 25"></span>
      <span style="--i: 18"></span>
      <span style="--i: 21"></span>
      <span style="--i: 15"></span>
      <span style="--i: 13"></span>
      <span style="--i: 26"></span>
      <span style="--i: 17"></span>
      <span style="--i: 27"></span>
      <span style="--i: 28"></span>

      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 24"></span>
      <span style="--i: 10"></span>
      <span style="--i: 14"></span>
      <span style="--i: 23"></span>
      <span style="--i: 18"></span>
      <span style="--i: 16"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
      <span style="--i: 22"></span>
      <span style="--i: 25"></span>
      <span style="--i: 18"></span>
      <span style="--i: 21"></span>
      <span style="--i: 15"></span>
      <span style="--i: 13"></span>
      <span style="--i: 26"></span>
      <span style="--i: 17"></span>
      <span style="--i: 27"></span>
      <span style="--i: 28"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin keyframes-animation($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }

  @keyframes #{$name} {
    @content;
  }
}

@mixin prefix-property($name, $value) {
  -webkit-#{$name}: $value;
  #{$name}: $value;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff6f8;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .bubbles {
    display: flex;

    span {
      margin: 0 4px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 0 0 0 5px #dddddd44, 0 0 10px #dddddd, 0 0 20px #dddddd;
      -webkit-animation: adrift calc(120s / var(--i)) infinite linear;
      animation: adrift calc(120s / var(--i)) infinite linear;

      &:nth-child(even) {
        background: #ff82ba;
        box-shadow: 0 0 0 10px #ff82ba44, 0 0 50px #ff82ba, 0 0 100px #ff82ba;
      }
    }

    @include keyframes-animation(adrift) {
      0% {
        @include prefix-property(transform, translateY(100vh) scale(0));
      }
      100% {
        @include prefix-property(transform, translateY(-10vh) scale(1));
      }
    }
  }
}
</style>