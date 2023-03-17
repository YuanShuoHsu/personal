<script setup>
import { useStore } from "./../stores/pinia.js";
import { storeToRefs } from "pinia";
const store = useStore();
const { cardActive, swiperActive } = storeToRefs(store);

const openCard = () => {
  cardActive.value = "active";
};
const openSwiper = () => {
  swiperActive.value = "active";
};
</script>

<template>
  <div class="cardContainer">
    <div class="card" :class="cardActive" @click="openCard">
      <div class="imgBox">
        <div class="glass">
          <span class="open">click</span>
        </div>
        <img draggable="false" src="./../assets/img/resume.svg" alt="resume" />
      </div>
      <div class="details">
        <span class="line"></span>
        <div class="content">
          <span class="greet">Hi, I am</span>
          <img draggable="false" src="./../assets/img/shot.png" alt="shot" />
          <span class="englishName">Yuan Shuo Hsu</span>
          <span class="job">Front-end Engineer</span>
          <span class="cv" @click="openSwiper">Open My CV</span>
          <div class="mobile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"
              />
            </svg>
            <span>0981-140-688</span>
          </div>
          <div class="mail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
              />
            </svg>
            <span>ook1725@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
    url("./../assets/fonts/Poppins-SemiBold.ttf") format("truetype");
}

@mixin keyframes-animation($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }

  @keyframes #{$name} {
    @content;
  }
}

@mixin desktop {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin prefix-property($name, $value) {
  -webkit-#{$name}: $value;
  #{$name}: $value;
}

.cardContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 211, 219, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(254, 254, 254, 0.8);
    background: rgba(254, 254, 254, 0.5);
    transform: rotate(45deg);
  }

  .card {
    padding: 0;
    width: 300px;
    height: 400px;
    background: #ffffff;
    border-radius: 0 10px 10px 0;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: 1s;
    pointer-events: auto;

    .details {
      .content {
        transform: translateY(20%);
        opacity: 0;
        transition: 1s;
      }
    }

    &.active {
      transform: translateX(50%);

      @include desktop() {
        transform: translateX(0);
      }

      .imgBox {
        transform: rotateY(-180deg);
        box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.2);

        @include desktop() {
          opacity: 0;
        }

        .glass {
          display: none;
        }
      }

      .details {
        box-shadow: inset 20px 0 20px -10px rgba(0, 0, 0, 0.2),
          10px 20px 40px rgba(0, 0, 0, 0.2);
        .content {
          // animation: to-top 1s;
          transform: translateY(0);
          opacity: 1;
        }

        // @include keyframes-animation(to-top) {
        //   0% {
        //     @include prefix-property(transform, translateY(20%));
        //     @include prefix-property(opacity, 0);
        //   }
        //   100% {
        //     @include prefix-property(transform, translateY(0));
        //     @include prefix-property(opacity, 1);
        //   }
        // }
      }
    }

    &:hover {
      .imgBox {
        .glass {
          .open {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }

    .imgBox {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 10px 10px 0;
      transform-style: preserve-3d;
      transform-origin: left;
      transition: 1s;
      overflow: hidden;
      z-index: 1;

      .glass {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;

        .open {
          width: 120px;
          line-height: 40px;
          background: rgba(254, 254, 254, 0.2);
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          border-top: 1px solid rgba(254, 254, 254, 0.8);
          border-left: 1px solid rgba(254, 254, 254, 0.8);
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 1px;
          color: rgba(45, 74, 82, 0.8);
          text-transform: uppercase;
          cursor: pointer;
          user-select: none;
          transform: translateY(20px);
          opacity: 0;
          transition: 0.5s;
        }
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 10px 10px 0;
        object-fit: cover;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        user-select: none;
      }
    }

    .details {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 10px 10px 0;
      box-shadow: inset 320px 0 20px -10px rgba(0, 0, 0, 0.2),
        10px 20px 40px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: 0.8s;

      .line {
        position: absolute;
        left: calc(-50% + 2px);
        top: 50%;
        width: 100%;
        height: 4px;
        transform: rotate(90deg);
        background: linear-gradient(
          90deg,
          #000 0%,
          #000 50%,
          transparent 50%,
          transparent 100%
        );
        background-size: 40px;
      }

      .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .greet {
          position: relative;
          width: 200px;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 1px;
          color: #000000;
          user-select: none;
        }

        img {
          position: relative;
          margin: 8px 0;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          user-select: none;
        }

        .englishName {
          position: relative;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 1px;
          color: #000000;
          user-select: none;
        }

        .job {
          position: relative;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: rgba(218, 112, 115);
          text-decoration: underline;
          user-select: none;
        }

        .cv {
          position: relative;
          margin: 8px 0;
          width: 150px;
          height: 40px;
          border: 1px solid rgba(83, 112, 114, 0.2);
          border-radius: 4px;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
          text-decoration: none;
          color: rgba(83, 112, 114, 0.8);
          background: rgba(243, 234, 219, 1);
          white-space: nowrap;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
          cursor: pointer;
          transition: 0.2s;

          &:hover {
            letter-spacing: 2px;
            background: rgba(243, 234, 219, 0.5);
          }
        }

        .mobile {
          position: relative;
          width: 200px;
          display: flex;
          align-items: center;

          svg {
            position: relative;
            margin: 8px;
            width: 24px;
            height: 24px;
            fill: #8e9b97;
          }

          span {
            font-family: "Poppins", sans-serif;
            font-size: 12px;
            font-weight: 100;
            letter-spacing: 1px;
            color: #000000;
          }
        }

        .mail {
          position: relative;
          width: 200px;
          display: flex;
          align-items: center;

          svg {
            position: relative;
            margin: 8px;
            width: 24px;
            height: 24px;
            fill: #8e9b97;
          }

          span {
            font-family: "Poppins", sans-serif;
            font-size: 12px;
            font-weight: 100;
            letter-spacing: 1px;
            color: #000000;
          }
        }
      }
    }
  }
}
</style>