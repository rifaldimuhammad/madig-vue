<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";

import { ref } from "vue";
import { value } from "dom7";
import SliderHome from "../components/SliderHome.vue";

const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}

</script>
<template>
  <div class="home">
    <div class="home-container">
      <div class="home-container-info">
        <div class="home-container-info-logo">
          <img src="../assets/img/logoGreen.svg" alt="" />
          <p>Nesfol</p>
        </div>
        <div class="home-container-info-title">
          <span>N</span>ew <span>E</span>nthu<span>S</span>iasm <span>FO</span>r
          <br />
          <span>L</span>earning
        </div>
        <div
          class="home-container-info-btn"
          @click="goToNavigation('magazine')"
        >
          Start Reading <Icons name="chevron-right" />
        </div>
        <div class="home-container-info-tema">
          <p>Bangkit Dari covid-19</p>
        </div>
      </div>
      <div class="home-container-content">
        <div class="home-container-content-box">
          
          <SliderHome />
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="scss">

.home {
  min-height: calc(100vh - 6.4rem);
  display: flex;
  flex-direction: column;
  &-container {
    flex: 1;
    padding: 5rem;
    align-self: stretch;
    display: flex;
    align-items: center;
    background-image: linear-gradient(
        to right,
        rgba(#012030, 0.9) 40%,
        transparent
      ),
      url("/src/assets/img/bg-home.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      background-image: linear-gradient(
          to bottom,
          rgba(#012030, 0.9) 40%,
          transparent
        ),
        url("/src/assets/img/bg-home.svg");
    }

    @media screen and (max-width: 500px) {
      gap: 5rem;
      padding: 3rem;
    }
    &-info {
      width: 50%;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 1100px) {
        width: -webkit-fill-available;
        align-items: center;
      }
      &-logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: fit-content;
        img {
          height: 15rem;
        }
        p {
          margin-top: 1rem;
          font-size: 6rem;
          font-weight: 600;
          color: var(--color-green);
        }
      }
      &-title {
        margin-top: 1.6rem;
        font-size: 3.6rem;
        font-weight: 500;
        color: white;
        span {
          color: var(--color-green);
        }
        @media screen and (max-width: 1100px) {
          text-align: center;
          br {
            display: none;
          }
        }
      }
      &-btn {
        padding: 1rem 2rem;
        font-size: 1.6rem;
        // background-color: var(--color-blue);
        display: flex;
        border: solid 2px var(--color-green);
        border-radius: 0.5rem;
        color: var(--color-green);
        align-items: center;
        gap: 0.5rem;
        width: fit-content;
        margin-top: 2rem;
        cursor: pointer;

        svg {
          fill: var(--color-green);
          height: 2rem;
        }
      }
      &-tema {
        margin-top: 2rem;

        p {
          font-size: 1.6rem;
          color: white;
          font-weight: 500;
          text-decoration: none;
        }
      }
    }
    &-content {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1100px) {
        width: -webkit-fill-available;
      }
      &-box {
        padding: 3rem;
        border-radius: 1rem;
        width: -webkit-fill-available;

        @media screen and (max-width: 500px) {
          padding: 0;
        }
      }
    }
  }
}
</style>
