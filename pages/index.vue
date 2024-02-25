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
    <Navbar />
    <div
      class="h-auto mb-10 w-screen flex items-center justify-center pt-20 md:px-64 px-10 lg:px-72"
    >
      <div
        class="w-full flex panelContainer text-darkPurple flex-col items-center h-full bg-mainWhite rounded-md"
      >
        <h2
          :onmouseleave="endAnimation"
          :onmouseover="startAnimation"
          class="text-7xl italic Hi cursor-pointer"
        >
          Hi,
        </h2>
        <div
          class="flex lg:flex-row flex-col md:flex-col items-center lg:space-x-6"
        >
          <h2 class="text-7xl italic We">We Are</h2>
          <h2 class="text-8xl Acapulco text-center">Acapulco Crew</h2>
        </div>
      </div>
    </div>
    <div class="w-full h-auto p-10 flex items-center flex-col justify-center">
      <h1
        class="bg-mainGreen text-center p-3 text-6xl text-darkPurple Creative"
      >
        We are a Creative Team with an Eye for
        <span class="OurWork">Color</span>
      </h1>
      <h1 class="p-3 lg:px-32 text-5xl text-darkPurple">
        Our team consists of a
        <span class="text-mainPurple underline">Marketing Expert</span> two
        <span class="text-mainPurple underline">FullStack Developers</span> and
        a
        <span class="text-mainPurple underline">Digital Artist</span>
      </h1>
    </div>
    <div
      class="flex flex-col WorkTrigger items-center text-darkPurple h-full w-full justify-start lg:justify-center"
    >
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
            <h1
              class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
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
            <h1
              class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
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
              FullStack Developer
            </h3>
            <h3 class="text-sm lg:text-lg text-mainPurple text-opacity-60">
              UI<span class="font-serif">/</span>UX
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
            <h1
              class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
              Greez
            </h1>
            <h3
              class="font-mainFont font-extralight text-xl lg:text-2xl text-mainGreen bg-mainPurple px-9 p-2 rounded-full"
            >
              Web3 Developer
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-70"
            >
              FullStack Developer
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainPurple text-opacity-60"
            >
              Web Security
            </h3>
          </a>
        </div>
        <div
          class="flex flex-col KeslerDiv w-full lg:w-1/3 h-full justify-start items-center"
        >
          <a
            href="https://twitter.com/Hellerkoalas/"
            class="flex flex-col justify-center items-center"
          >
            <img
              class="w-72 object-contain Kesler cursor-pointer lg:mb-4"
              src="../assets/images/Heller.webp"
              alt=""
            />
            <h1
              class="Acapulco mb-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
              Heller
            </h1>
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
          </a>
        </div>
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
    <!-- <div
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
    </div> -->
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
