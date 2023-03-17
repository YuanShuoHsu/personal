<script setup>
import { useStore } from "./../stores/pinia.js";
import { storeToRefs } from "pinia";

import { FreeMode, Keyboard, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";

import download from "./../assets/download/履歷.pdf";

import { computed } from "vue";

const store = useStore();
const { cardActive, swiperActive } = storeToRefs(store);

const modules = computed(() => {
  return [FreeMode, Keyboard, Mousewheel, Pagination];
});

const closeSwiper = () => {
  swiperActive.value = "";
};
const stopSwiper = () => {};
</script>

<template>
  <div class="swiperContainer" :class="swiperActive">
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :speed="500"
      :freeMode="{
        enabled: true,
        sticky: true,
      }"
      :keyboard="{
        enabled: true,
      }"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
    >
      <a :href="download" download="履歷-許元碩.pdf">
        <svg
          class="download"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
          />
        </svg>
      </a>
      <swiper-slide @click="closeSwiper">
        <img src="./../assets/img/1.svg" alt="1" @click.stop="stopSwiper" />
      </swiper-slide>
      <swiper-slide @click="closeSwiper">
        <img src="./../assets/img/2.svg" alt="2" @click.stop="stopSwiper" />
      </swiper-slide>
      <swiper-slide @click="closeSwiper">
        <img src="./../assets/img/3.svg" alt="3" @click.stop="stopSwiper" />
      </swiper-slide>
      <swiper-slide @click="closeSwiper">
        <img src="./../assets/img/4.svg" alt="4" @click.stop="stopSwiper" />
      </swiper-slide>
      <swiper-slide @click="closeSwiper">
        <img src="./../assets/img/5.svg" alt="5" @click.stop="stopSwiper" />
      </swiper-slide>
      <swiper-slide @click="closeSwiper">
        <img src="./../assets/img/6.svg" alt="6" @click.stop="stopSwiper" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
@mixin mobile {
  @media (max-width: 414px) {
    @content;
  }
}
.swiperContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &.active {
    pointer-events: auto;

    .swiper {
      opacity: 1;
    }
  }

  .swiper {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: 0.2s;

    a {
      .download {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 4px;
        width: 20px;
        height: 20px;
        background: #fefefe;
        border-radius: 4px;
        fill: #000000;
        cursor: pointer;
        transition: 0.2s;
        z-index: 1;

        @include mobile() {
          background: rgba(0, 0, 0, 0.8);
          fill: #fefefe;
        }

        &:hover,
        &:active {
          background: rgba(254, 254, 254, 0.8);
          @include mobile() {
            background: rgba(0, 0, 0, 0.5);
          }
        }

        path {
          pointer-events: none;
        }
      }
    }

    .swiper-wrapper {
      position: relative;

      .swiper-slide {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;

        img {
          display: block;
          width: auto;
          height: 100%;
          cursor: grab;
          user-select: none;

          @include mobile() {
            width: 100%;
            height: auto;
          }
        }
      }
    }

    :deep(.swiper-pagination) {
      .swiper-pagination-bullet {
        background: #fefefe;
        @include mobile() {
          background: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>