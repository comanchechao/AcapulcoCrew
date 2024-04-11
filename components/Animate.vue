<template>
  <div
    class="flex TEAM h-full lg:px-20 lg:flex-row flex-col w-full justify-start items-start lg:items-center lg:space-y-0 space-y-5"
  >
    <div
      class="flex flex-col KeslerDiv w-full lg:w-1/3 h-full justify-start items-center space-y-2"
    >
      <a
        href="https://instagram.com/famousKesler/"
        class="flex flex-col justify-center items-center"
      >
        <img
          class="w-72 object-contain Kesler cursor-pointer lg:mb-4"
          src="../assets/images/Kesler.webp"
          alt=""
        />
        <h1 class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue">
          Kesler
        </h1>
        <h3
          class="font-mainFont font-extralight text-xl lg:text-2xl text-mainGreen bg-mainPurple px-9 p-2 rounded-full"
        >
          Digital Artist
        </h3>
        <h3
          class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-70"
        >
          NFT Artist
        </h3>
        <h3
          class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-60"
        >
          Graffiti Writer
        </h3>
      </a>
    </div>
    <div
      class="flex flex-col ChaoDiv w-full lg:w-1/3 h-full justify-start items-center space-y-2"
    >
      <a
        href="https://instagram.com/comanchechao/"
        class="flex flex-col justify-center items-center"
      >
        <img
          class="w-72 object-contain Chao cursor-pointer"
          src="../assets/images/Chao.webp"
          alt=""
        />
        <h1 class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue">
          Chao
        </h1>
        <h3
          class="font-mainFont font-extralight text-xl lg:text-2xl text-mainGreen bg-mainPurple px-9 p-2 rounded-full"
        >
          Web3 Developer
        </h3>
        <h3
          class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-70"
        >
          Graphic Designer
        </h3>
        <h3 class="text-sm lg:text-lg text-mainPurple text-opacity-60">
          UI<span class="font-serif">/</span>UX Expert
        </h3>
      </a>
    </div>
    <div
      class="flex flex-col GreezDiv w-full lg:w-1/3 h-full justify-center items-center"
    >
      <a
        href="https://instagram.com/lemon_greez"
        class="flex flex-col justify-center items-center"
      >
        <img
          class="w-72 object-contain Greez cursor-pointer"
          src="../assets/images/Greez.webp"
          alt=""
        />
        <h1 class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue">
          Greez
        </h1>
        <h3
          class="font-mainFont font-extralight text-xl lg:text-2xl text-mainGreen bg-mainPurple px-9 p-2 rounded-full"
        >
          Web3 Developer
        </h3>

        <h3
          class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-60"
        >
          Security Expert
        </h3>
      </a>
    </div>
    <div
      class="flex flex-col w-full lg:w-1/3 h-full justify-start items-center"
    >
      <div
        v-on:mouseenter="animateOnHover"
        :onmouseleave="animateOnLeave"
        class="w-full h-full bg-mainRed my-24 relative flex items-center justify-center"
      >
        <img
          ref="Heller1"
          class="w-96 object-contain Heller1 absolute cursor-pointer lg:mb-4"
          src="../assets/images/Heller_1.png"
          alt=""
        /><img
          ref="Heller2"
          class="w-96 object-contain Heller2 absolute cursor-pointer lg:mb-4"
          src="../assets/images/Heller_2.png"
          alt=""
        />
      </div>
      <a
        href="https://twitter.com/Hellerkoalas/"
        class="flex flex-col justify-center items-center"
      >
        <h1 class="Acapulco mb-3 font-black text-3xl lg:text-5xl text-mainBlue">
          Heller
        </h1>
      </a>
      <h3
        class="font-mainFont font-extralight text-xl lg:text-2xl text-mainGreen bg-mainPurple px-9 p-2 rounded-full"
      >
        Marketing Expert
      </h3>
      <h3
        class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-70"
      >
        NFT Collector
      </h3>

      <h3
        class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-60"
      >
        Web3 Producer
      </h3>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import gsap from "gsap";

const Heller1 = ref(null);
const Heller2 = ref(null);

const animateOnHover = () => {
  const tl = gsap.timeline({ paused: true });
  tl.to(Heller1.value, {
    duration: 0.2,
    scale: 1.2,
    x: 90,
    rotate: 10,
    ease: "power3.out",
  }).to(Heller2.value, {
    duration: 0.2,
    scale: 1.2,
    x: -90,
    rotate: -10,

    ease: "power3.out",
  });
  tl.play();
};
const animateOnLeave = () => {
  const tl = gsap.timeline({ paused: true });
  tl.to(Heller1.value, {
    duration: 0.5,
    scale: 1,
    x: 0,
    rotate: 0,

    ease: "pwoer3.in",
  });
  tl.to(Heller2.value, {
    duration: 0.5,
    scale: 1,
    x: 0,
    rotate: 0,

    ease: "pwoer3.in",
  });
  tl.play();
};
</script>

<style></style>
