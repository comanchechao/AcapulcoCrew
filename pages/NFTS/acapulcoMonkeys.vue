<template>
  <head>
    <title>Acapulco Crew | Creative Team</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-mainWhite overflow-hidden overflow-x-hidden">
    <div class="w-screen LoadingDiv h-screen flex items-center justify-center">
      <img src="../assets/images/Logo.gif" alt="" />
    </div>
    <div class="w-screen h-28 Back px-24 flex items-center justify-between">
      <NuxtLink to="/">
        <PhCaretCircleLeft
          class="bg-mainGreen cursor-pointer text-mainWhite hover:text-mainPurple active:text-mainGreen transition duration-300 ease-linear hover:bg-mainWhite rounded-full"
          size="55"
        />
      </NuxtLink>
      <div
        class="img"
        :onmouseover="startAnimation1"
        :onmouseleave="endAnimation1"
      >
        <img
          src="../../assets/images/Logo.webp"
          class="lg:w-24 w-20 object-contain cursor-pointer"
          alt=""
        />
      </div>
    </div>
    <div
      class="h-auto mb-10 w-screen flex items-center justify-center px-10 lg:px-72"
    >
      <div
        class="w-full flex panelContainer text-darkPurple flex-col items-center h-full bg-mainWhite rounded-md"
      >
        <h2
          :onmouseleave="endAnimation"
          :onmouseover="startAnimation"
          class="text-4xl mb-4 italic Hi cursor-pointer"
        >
          Introducing
        </h2>
        <div class="flex lg:flex-row flex-col items-center lg:space-x-6">
          <h2 class="text-9xl Acapulco text-center">Acapulco Monkeys</h2>
        </div>
      </div>
    </div>
    <div class="w-full h-auto p-2 flex items-center flex-col justify-center">
      <h1
        class="bg-mainGreen flex items-center justify-center space-x-2 w-full text-center p-3 text-4xl text-darkPurple Creative"
      >
        <span> Acapulco Monkeys is a NFT project based on </span>
        <span class="flex items-center space-x-2"
          ><span>SOLANA</span>
          <img
            src="../assets/images/SOL.webp"
            class="object-contain w-10"
            alt=""
        /></span>
      </h1>
    </div>
    <div
      class="flex h-screen lg:px-20 lg:flex-row flex-col w-full justify-around items-center lg:space-y-0 space-y-5"
    >
      <div
        class="h-full py-16 pl-24 lg:w-1/2 flex-col w-full flex items-start justify-start"
      >
        <h1 class="p-3 text-4xl text-darkPurple">
          Dive into the Tropics🌴 with Acapulco Monkeys: Your Solana Powered NFT
          Gateway
        </h1>
        <h2 class="p-3 text-xl text-darkPurple">
          Get ready to unleash your inner primate with Acapulco Monkeys, a
          vibrant NFT collection on the Solana blockchain.
        </h2>
        <h2 class="p-3 text-xl text-darkPurple">
          Immerse yourself in a world of cheeky charm and exclusive perks, all
          while rocking a unique simian avatar. Join the troop and unlock
          exciting experiences, from community events to exclusive merchandise –
          the jungle awaits.
        </h2>
      </div>
      <div class="h-full lg:w-1/2 w-full flex py-16 items-start justify-center">
        <img
          src="../assets/images/SHIRTS.webp"
          class="h-dialog object-contain"
          alt=""
        />
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
      class="flex flex-col WorkTrigger items-center text-darkPurple h-full w-full my-24 space-y-28 justify-center"
    >
      <h2 class="lg:text-8xl text-6xl OurWork text-center">Our Work :</h2>
      <div
        class="h-full w-full flex lg:space-y-0 space-y-6 lg:flex-row flex-col items-center justify-around lg:px-24 px-8 my-10"
      >
        <h2 class="text-6xl lg:w-1/2 w-full text-center font-bold">
          Acapulco Design
        </h2>
        <div
          class="lg:w-1/2 w-full h-72 flex items-center justify-center bg-mainRed rounded-md"
        >
          <img src="../assets/images/Logo.gif" alt="" />
        </div>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around lg:px-24 px-8 my-10"
      >
        <div class="lg:w-1/2 w-full h-72 bg-mainGreen rounded-md"></div>
        <h2 class="text-6xl lg:w-1/2 w-full text-center font-bold">
          Hocus Pocus
        </h2>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around lg:px-24 px-8 my-10"
      >
        <h2 class="text-6xl lg:w-1/2 w-full text-center font-bold">
          Greez EyeWear
        </h2>
        <div class="lg:w-1/2 w-full h-72 bg-mainPurple rounded-md"></div>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around lg:px-24 px-8 my-10"
      >
        <div class="lg:w-1/2 w-full h-72 bg-mainYellow rounded-md"></div>
        <h2 class="text-6xl lg:w-1/2 w-full text-center font-bold">Boutak</h2>
      </div>
      <div
        class="h-full w-full flex lg:flex-row flex-col items-center justify-around lg:px-24 px-8 my-10"
      >
        <h2 class="text-6xl lg:w-1/2 w-full text-center font-bold">
          Punkey Monkey
        </h2>
        <div class="lg:w-1/2 w-full h-72 bg-mainPink rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhCaretCircleLeft } from "@phosphor-icons/vue";

import { gsap } from "gsap";

import { onMounted } from "vue";
const startAnimation1 = () => {
  gsap.to(".img", { rotation: 360, ease: "Linear.easeNone", duration: 0.2 });
};
const endAnimation1 = () => {
  gsap.to(".img", { rotation: 0, ease: "Linear.easeNone", duration: 0.2 });
};
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
  TL.from(".Back", {
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.6,
    delay: 0.7,
  });
  TL.from(".Hi", {
    x: -50,
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.6,
    delay: 0.2,
  });
  TL.from(".We", {
    x: -50,
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.3,
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
  // gsap.from(".OurWork", {
  //   opacity: 0,
  //   y: 60,
  //   duration: 1,
  //   ease: "power4.out",
  //   scrollTrigger: {
  //     trigger: ".WorkTrigger",
  //     start: "bottom top",
  //     markers: true,
  //     end: "+=500",
  //     toggleActions: "play none none reverse",
  //   },
  // });
});
</script>

<style>
@font-face {
  font-family: "Oxygen";
  src: url("../assets/fonts/psycharegular-yq334.otf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
@font-face {
  font-family: "OXY";
  src: url("../assets/fonts/ThunderDemo.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}

.Acapulco {
  font-family: "OXY";
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

.OurWork {
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
