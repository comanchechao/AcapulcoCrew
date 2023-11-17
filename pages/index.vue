<template>
  <div class="h-full w-screen bg-mainWhite overflow-hidden">
    <div class="w-screen LoadingDiv h-screen flex items-center justify-center">
      <img src="../assets/images/Logo.gif" alt="" />
    </div>
    <Navbar />
    <div
      class="h-auto mb-10 w-full flex items-center justify-center pt-20 px-72"
    >
      <div
        class="w-full flex panelContainer text-darkPurple flex-col items-center h-full bg-mainWhite rounded-md"
      >
        <h2
          :onmouseleave="endAnimation"
          :onmouseover="startAnimation"
          class="text-7xl italic Hi cursor-pointer"
        >
          Hi!
        </h2>
        <div class="flex lg:flex-row flex-col items-center lg:space-x-6">
          <h2 class="text-7xl italic We">We Are</h2>
          <h2 class="text-8xl Acapulco text-center">Acapulco Crew</h2>
        </div>
      </div>
    </div>
    <div class="w-full h-auto p-10 flex items-center flex-col justify-center">
      <h1 class="bg-mainGreen p-3 text-6xl text-darkPurple Creative">
        We are a Creative Team with an Eye for
        <span class="Acapulco">Color</span>
      </h1>
      <h1 class="p-3 text-5xl text-darkPurple">
        Our team consists of two
        <span class="text-mainPurple">FullStack Developers</span> and a
        <span class="text-mainRed">Digital Artist</span>
      </h1>
    </div>
    <div
      class="flex h-full lg:px-20 lg:flex-row flex-col w-full justify-around items-center lg:space-y-0 space-y-5"
    >
      <div
        class="flex flex-col KeslerDiv w-full lg:w-1/3 h-full justify-start items-center space-y-2"
      >
        <a
          href="https://instagram.com/famousKesler/"
          class="flex flex-col justify-center items-center space-y-2 lg:space-y-4"
        >
          <img
            class="w-72 object-contain Kesler cursor-pointer lg:mb-4"
            src="../assets/images/Kesler.webp"
            alt=""
          />
          <h1
            class="font-mainFont font-black text-3xl lg:text-5xl text-mainBlue"
          >
            Kesler
          </h1>
          <h3
            class="font-mainFont font-extralight text-3xl lg:text-4xl text-mainPurple"
          >
            Digital Artist
          </h3>
        </a>
      </div>
      <div
        class="flex flex-col ChaoDiv w-full lg:w-1/3 h-full justify-start items-center space-y-2"
      >
        <a
          href="https://instagram.com/comanchechao/"
          class="flex flex-col justify-center items-center space-y-2 lg:space-y-4"
        >
          <img
            class="w-72 object-contain Chao cursor-pointer"
            src="../assets/images/Chao.webp"
            alt=""
          />
          <h1
            class="font-mainFont font-black text-3xl lg:text-5xl text-mainBlue"
          >
            Chao
          </h1>
          <h3
            class="font-mainFont font-extralight text-3xl lg:text-4xl text-mainPurple"
          >
            FullStack Developer
          </h3>
        </a>
      </div>
      <div
        class="flex flex-col GreezDiv w-full lg:w-1/3 h-full justify-center items-center"
      >
        <a
          href="https://instagram.com/lemon_greez"
          class="flex flex-col justify-center items-center space-y-2 lg:space-y-4"
        >
          <img
            class="w-72 object-contain Greez cursor-pointer"
            src="../assets/images/Greez.webp"
            alt=""
          />
          <h1
            class="font-mainFont font-black my-4 text-3xl lg:text-5xl text-mainBlue"
          >
            Greez
          </h1>
          <h3
            class="font-mainFont font-extralight text-3xl lg:text-4xl text-mainPurple"
          >
            FullStack Developer
          </h3>
        </a>
      </div>
    </div>
    <div
      class="relative flex h-44 mt-12 w-screen justify-center items-center NavbarTrigger logo"
    >
      <img
        class="absolute thirdPic object-contain w-44"
        src="../assets/images/logo-second.webp"
        alt=""
      />
      <img
        class="absolute firstPic object-contain w-44"
        src="../assets/images/logo-third.webp"
        alt=""
      />
      <img
        class="absolute secondPic object-contain w-44"
        src="../assets/images/logo-forth.webp"
        alt=""
      />
      <img
        class="absolute forthPic object-contain w-44"
        src="../assets/images/logo-first.webp"
        alt=""
      />
    </div>
    <div
      class="flex flex-col items-center h-full w-full my-24 space-y-28 justify-center"
    >
      <h2 class="text-8xl Acapulco text-center">Our Work :</h2>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around px-24 my-10"
      >
        <h2 class="text-6xl w-1/2 text-center font-bold">Acapulco Design</h2>
        <div class="w-1/2 h-72 bg-mainRed rounded-md"></div>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around px-24 my-10"
      >
        <div class="w-1/2 h-72 bg-mainGreen rounded-md"></div>
        <h2 class="text-6xl w-1/2 text-center font-bold">Hocus Pocus</h2>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around px-24 my-10"
      >
        <h2 class="text-6xl w-1/2 text-center font-bold">Greez EyeWear</h2>
        <div class="w-1/2 h-72 bg-mainPurple rounded-md"></div>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around px-24 my-10"
      >
        <div class="w-1/2 h-72 bg-mainYellow rounded-md"></div>
        <h2 class="text-6xl w-1/2 text-center font-bold">Boutak</h2>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around px-24 my-10"
      >
        <h2 class="text-6xl w-1/2 text-center font-bold">Punkey Monkey</h2>
        <div class="w-1/2 h-72 bg-mainPink rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

import { onMounted } from "vue";

const startAnimation = () => {
  gsap.to(".Hi", { x: 27, ease: "Linear.easeNone", duration: 0.2 });
};
const endAnimation = () => {
  gsap.to(".Hi", { x: 0, ease: "Linear.easeNone", duration: 0.2 });
};
onMounted(() => {
  const TL = gsap.timeline();
  TL.to(".LoadingDiv", {
    display: "none",
  });
  TL.from(".Hi", {
    x: -50,
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.6,
    delay: 1.6,
  });
  TL.from(".We", {
    x: -50,
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.5,
  });
  TL.from(".Acapulco", {
    y: 50,
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.5,
  });
  TL.from(".Creative", {
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.5,
  });
  gsap.from(".logo", {
    rotation: 360 * 7,
    duration: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      start: "top bottom",
      end: "+=8000",
      scrub: 0.2,
      trigger: ".panelContainer",
    },
  });
});
</script>

<style scoped>
@font-face {
  font-family: "Oxygen";
  src: url("../assets/fonts/ThunderDemo.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}

.Acapulco {
  font-family: "Oxygen";
  background-image: repeating-linear-gradient(
    to left,
    #f01197 0%,
    #722ef1 10%,

    #4800f1 15%,
    #3602f2 29%,
    #c078f0 67%,
    #de4b9c 100%
  );
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 6s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.KeslerDiv:hover {
  cursor: pointer;
  filter: drop-shadow(1.8);
  filter: brightness(0.6);
  transition: ease-in-out 0.3s;
}
.KeslerDiv:active {
  filter: brightness(1.2);
  scale: 1.2;
  transition: ease-in-out 0.3s;
}
.ChaoDiv:hover {
  cursor: pointer;
  filter: drop-shadow(1.8);
  filter: brightness(0.6);
  transition: ease-in-out 0.3s;
}
.ChaoDiv:active {
  filter: brightness(1.2);
  scale: 1.2;
  transition: ease-in-out 0.3s;
}
.GreezDiv:hover {
  cursor: pointer;
  filter: drop-shadow(1.8);
  filter: brightness(0.6);
  transition: ease-in-out 0.3s;
}
.GreezDiv:active {
  filter: brightness(1.2);
  scale: 1.2;
  transition: ease-in-out 0.3s;
}
</style>
