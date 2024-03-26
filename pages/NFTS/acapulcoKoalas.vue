<template>
  <head>
    <title>Acapulco Crew | Creative Team</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-mainBlack overflow-hidden overflow-x-hidden">
    <div class="w-screen LoadingDiv h-screen flex items-center justify-center">
      <img src="../../assets/images/Logo.gif" alt="" />
    </div>
    <div
      class="w-screen Back h-24 px-4 lg:px-24 flex items-center justify-between"
    >
      <NuxtLink to="/">
        <PhCaretCircleLeft
          class="bg-mainYellow cursor-pointer text-mainBlack hover:text-mainYellow active:text-mainYellow transition duration-300 hover:bg-transparent ease-linear rounded-full"
          size="55"
        />
      </NuxtLink>
      <div
        class="img"
        :onmouseover="startAnimation1"
        :onmouseleave="endAnimation1"
      >
        <NuxtLink to="/nfts/acapulcoMonkeys">
          <img
            src="../../assets/images/Logo.webp"
            class="lg:w-24 w-20 object-contain cursor-pointer"
            alt=""
          />
        </NuxtLink>
      </div>
    </div>
    <div
      class="h-auto mb-10 w-screen flex items-center justify-center px-10 lg:px-72"
    >
      <div
        class="w-full flex panelContainer text-mainWhite flex-col items-center h-full rounded-md"
      >
        <h2
          :onmouseleave="endAnimation"
          :onmouseover="startAnimation"
          class="text-4xl mb-4 italic Hi cursor-pointer"
        >
          Introducing
        </h2>
        <div class="flex lg:flex-row flex-col items-center lg:space-x-6">
          <h2 class="lg:text-9xl text-7xl Koala SectionTrigger text-center">
            Acapulco Koalas
          </h2>
        </div>
      </div>
    </div>
    <div class="w-full h-auto p-2 flex items-center flex-col justify-center">
      <img
        src="../../assets/images/Koala.webp"
        class="w-48 object-contain Monke"
        alt=""
      />
      <h1
        class="bg-mainYellow flex lg:flex-row flex-col items-center justify-center lg:space-x-2 w-full text-center p-3 text-3xl text-mainBlack Creative"
      >
        <span> Acapulco Koalas is a NFT project based on </span>
        <span class="flex items-center space-x-2"
          ><span>SOLANA</span>
          <img
            src="../../assets/images/SOL.webp"
            class="object-contain w-10"
            alt=""
        /></span>
      </h1>
    </div>

    <div
      class="flex SectionDiv h-auto lg:px-20 lg:pt-16 lg:flex-row px-2 flex-col-reverse w-full justify-around items-start lg:space-y-0 space-y-5"
    >
      <div
        class="h-auto bg-mainWhite text-mainBlack py-6 px-12 lg:w-1/2 flex-col w-full flex items-start justify-start"
      >
        <h1 class="p-3 text-4xl">
          Dive into the Chilled Oasis of Acapulco Koalas on Solana
        </h1>
        <h2 class="p-3 text-xl">
          Get ready to hang ten with the coolest koalas on the blockchain<span
            class="font-serif"
            >!</span
          >
          Acapulco Koalas is an exclusive NFT collection bringing beach vibes
          and laid-back charm to the Solana ecosystem.
        </h2>
        <h2 class="p-3 text-xl">
          Rarity and Utility: Each NFT unlocks exclusive experiences, airdrops,
          and voting rights within the community.
        </h2>
        <h2 class="p-3 text-xl">
          Chill Community: Connect with fellow koala enthusiasts, participate in
          events, and soak up the good vibes.
        </h2>
        <h2 class="p-3 text-xl">
          Solana Advantage: Built on the blazing-fast Solana blockchain,
          ensuring low fees and seamless transactions..
        </h2>
        <h2 class="p-3 text-xl">
          Mellow out with the Acapulco Koalas and join the wave of NFT
          coolness<span class="font-serif">!</span>
        </h2>
        <button
          @click="StartExam"
          class="px-10 py-2 rounded-full bg-mainYellow text-mainBlack text-xl transition ease-in duration-300 hover:bg-mainWhite shadow-md shadow-transparent hover:shadow-mainYellow border-2 border-transparent hover:border-mainBlack"
        >
          Explore
        </button>
      </div>
      <div class="h-auto lg:w-1/2 w-full flex items-start justify-center">
        <img
          src="../../assets/images/Koala.gif"
          class="lg:h-dialog h-auto object-contain Monkey1T panelContainer"
          alt=""
        />
      </div>
    </div>
    <div
      class="Monkey grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 place-items-center justify-items-center gap-5 lg:gap-1"
    >
      <div
        class="relative lg:col-span-4 md:col-span-3 col-span-1 flex h-44 mt-12 w-screen justify-center items-center NavbarTrigger logo"
      >
        <img
          class="absolute thirdPic object-contain w-28"
          src="../../assets/images/logo-second.webp"
          alt=""
        />
        <img
          class="absolute firstPic object-contain w-28"
          src="../../assets/images/logo-third.webp"
          alt=""
        />
        <img
          class="absolute secondPic object-contain w-28"
          src="../../assets/images/logo-forth.webp"
          alt=""
        />
        <img
          class="absolute forthPic object-contain w-28"
          src="../../assets/images/logo-first.webp"
          alt=""
        />
      </div>
      <h2
        id="Present"
        class="text-5xl mb-11 Koala lg:col-span-4 md:col-span-3 col-span-1 text-center"
      >
        Acapulco Presents
      </h2>
      <img
        src="../../assets/images/Koala1.webp"
        class="w-60 object-contain Monkey1 TEAMT"
        alt=""
      /><img
        src="../../assets/images/Koala2.webp"
        class="w-60 object-contain Monkey1"
        alt=""
      /><img
        src="../../assets/images/Koala3.webp"
        class="w-60 object-contain Monkey1"
        alt=""
      /><img
        src="../../assets/images/Koala4.webp"
        class="w-60 object-contain Monkey1"
        alt=""
      />
    </div>
    <div
      class="flex flex-col WorkTrigger items-center text-darkPurple h-full w-full mt-3 lg:mt-24 justify-start lg:justify-center"
    >
      <h2
        class="lg:text-6xl text-6xl lg:my-9 lg:mb-20 my-10 text-mainWhite bg-mainBlue w-full p-1 OurWorks text-center"
      >
        Our Team consists of :
      </h2>
      <div
        class="flex TEAM h-full lg:px-20 lg:flex-row flex-col w-full justify-start items-start lg:items-center lg:space-y-0 space-y-10"
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
              src="../../assets/images/Kesler.webp"
              alt=""
            />
            <h1
              class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
              Kesler
            </h1>
            <h3
              class="font-mainFont font-extralight text-xl lg:text-2xl text-mainWhite bg-mainBlue px-9 p-2 rounded-full"
            >
              Digital Artist
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainGreen"
            >
              NFT Artist
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainGreen 0"
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
              src="../../assets/images/Chao.webp"
              alt=""
            />
            <h1
              class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
              Chao
            </h1>
            <h3
              class="font-mainFont font-extralight text-xl lg:text-2xl text-mainWhite bg-mainBlue px-9 p-2 rounded-full"
            >
              Web3 Developer
            </h3>
            <h3
              class="font-mainFont font-extralight my-1 text-sm lg:text-lg text-mainGreen"
            >
              FullStack Developer
            </h3>
            <h3 class="text-sm lg:text-lg text-mainGreen">
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
              src="../../assets/images/Greez.webp"
              alt=""
            />
            <h1
              class="Acapulco my-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
              Greez
            </h1>
            <h3
              class="font-mainFont font-extralight text-xl lg:text-2xl text-mainWhite bg-mainBlue px-9 p-2 rounded-full"
            >
              Web3 Developer
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainGreen"
            >
              FullStack Developer
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainGreen"
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
              src="../../assets/images/Heller.webp"
              alt=""
            />
            <h1
              class="Acapulco mb-3 font-black text-3xl lg:text-5xl text-mainBlue"
            >
              Heller
            </h1>
            <h3
              class="font-mainFont font-extralight text-xl lg:text-2xl text-mainWhite bg-mainBlue px-9 p-2 rounded-full"
            >
              Marketing Expert
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainGreen"
            >
              NFT Collector
            </h3>
            <h3
              class="font-mainFont font-extralight text-sm lg:text-lg text-mainGreen"
            >
              Web3 Producer
            </h3>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex items-center relative h-full flex-col justify-start w-full"
    >
      <h2
        class="lg:text-5xl text-3xl mt-28 lg:absolute text-mainWhite px-7 lg:border-b-8 pb-2 border-mainGreen lg:w-textArea lg:px-16 text-center"
      >
        To learn more about the project<span class="font-serif">'</span>s goals,
        timeline, and team, feel free to contact us.
      </h2>
      <div
        class="flex lg:absolute transform lg:translate-y-60 items-center justify-center space-x-2"
      >
        <a href="https://www.instagram.com/acapulcoCrew/">
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 hover:bg-mainRed hover:text-mainWhite rounded-full"
          >
            <PhInstagramLogo :size="66" weight="fill" />
          </button>
        </a>
        <a href="https://twitter.com/acapulcoMonkeys/">
          <button
            class="text-LightBlue-400 cursor-pointer transition ease-in-out duration-150 p-2 hover:bg-LightBlue-400 hover:text-mainWhite rounded-full"
          >
            <PhTwitterLogo :size="66" weight="fill" />
          </button>
        </a>
        <a href="https://discord.gg/v7E5SC35VF/">
        <button
          class="     text-LightBlue-700 cursor-pointer transition ease-in-out duration-150 p-2 hover:bg-blue-500 hover:text-mainWhite rounded-full"
        >
          <PhDiscordLogo :size="66" weight="fill" />
        </button>
    </a>

      </div>
      <img
        src="../../assets/images/Footer.webp"
        class="w-screen object-cover"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { PhCaretCircleLeft } from "@phosphor-icons/vue";
import {
  PhWhatsappLogo,
  PhInstagramLogo,
  PhDiscordLogo,
  PhMapPin,
  PhTwitterLogo,
} from "@phosphor-icons/vue";
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
    duration: 0.5,
    delay: 1,
  });
  TL.from(".Hi", {
    x: -50,
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.5,
  });

  TL.from(".Koala", {
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
  TL.from(".Monke", {
    opacity: 0,
    y: 30,
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
  gsap.from(".SectionDiv", {
    scale: 0.7,
    y: -100,
    duration: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0.5,
      trigger: ".SectionTrigger",
    },
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

<style scoped>
@font-face {
  font-family: "OXY2";
  src: url("../../assets/fonts/pixelgamerpersonaluse-rg61l.otf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}

.Koala {
  font-family: "OXY2";
  background-image: repeating-linear-gradient(
    to left,
    #a2f011 0%,
    #1cd24d 10%,

    #0eb991 15%,
    #02c6f2 29%,
    #e0900f 67%,
    #bae00f 100%
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
