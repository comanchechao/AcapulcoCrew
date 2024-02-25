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
    <div
      class="w-screen h-28 Back px-4 lg:px-24 flex items-center justify-between"
    >
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
        class="w-full flex text-darkPurple flex-col items-center h-full bg-mainWhite rounded-md"
      >
        <h2
          :onmouseleave="endAnimation"
          :onmouseover="startAnimation"
          class="lg:text-4xl text-2xl mb-4 italic Hi cursor-pointer"
        >
          Introducing
        </h2>
        <div class="flex lg:flex-row flex-col items-center lg:space-x-6">
          <h2 class="lg:text-9xl text-8xl SectionTrigger Acapulco text-center">
            Acapulco Monkeys
          </h2>
        </div>
      </div>
    </div>
    <div class="w-full h-auto p-2 flex items-center flex-col justify-center">
      <img
        src="../../assets/images/MonkMain.webp"
        class="w-48 object-contain Monke"
        alt=""
      />
      <h1
        class="bg-mainGreen flex lg:flex-row flex-col items-center justify-center lg:space-x-2 w-full text-center p-3 text-3xl text-darkPurple Creative"
      >
        <span> Acapulco Monkeys is a NFT project based on </span>
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
        class="h-auto lg:pl-24 lg:w-1/2 flex-col w-full flex items-start justify-start"
      >
        <h1 class="p-3 text-2xl lg:text-4xl text-gray-800">
          Dive into the Tropics🌴 with Acapulco Monkeys: Your Solana Powered NFT
          Gateway
        </h1>
        <h2 class="p-3 text-lg lg:text-xl text-gray-700">
          Get ready to unleash your inner primate with Acapulco Monkeys, a
          vibrant NFT collection on the Solana blockchain.
        </h2>
        <h2 class="p-3 text-lg lg:text-xl text-gray-600">
          Immerse yourself in a world of cheeky charm and exclusive perks, all
          while rocking a unique simian avatar.
        </h2>
        <h2 class="p-3 text-lg lg:text-xl text-gray-600">
          Join the troop and unlock exciting experiences, from community events
          to exclusive merchandise – the jungle awaits.
        </h2>
        <button
          @click="StartExam"
          class="px-10 py-2 rounded-full bg-mainGreen text-mainBlack text-xl transition ease-in duration-300 hover:bg-mainWhite shadow-md shadow-transparent hover:shadow-mainGreen"
        >
          Explore
        </button>
      </div>
      <div class="h-auto lg:w-1/2 w-full flex items-start justify-center">
        <a
          class="border-8 hover:border-mainGreen shadow-lg shadow-transparent hover:shadow-mainGreen border-transparent cursor-pointer transition duration-300 ease-linear"
          href="https://www.instagram.com/payamone/"
        >
          <img
            src="../../assets/images/SHIRTS.webp"
            class="lg:h-dialog h-auto object-contain Monkey1T panelContainer"
            alt=""
          />
        </a>
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
        class="text-5xl mb-11 Acapulco lg:col-span-4 md:col-span-3 col-span-1 text-center"
      >
        Acapulco Presents...
      </h2>
      <img
        src="../../assets/images/Monkey1.webp"
        class="w-72 object-contain Monkey1 TEAMT"
        alt=""
      /><img
        src="../../assets/images/Monkey2.webp"
        class="w-72 object-contain Monkey1"
        alt=""
      /><img
        src="../../assets/images/Monkey3.webp"
        class="w-72 object-contain Monkey1"
        alt=""
      /><img
        src="../../assets/images/Monkey4.webp"
        class="w-72 object-contain Monkey1"
        alt=""
      />
    </div>
    <div
      class="flex flex-col WorkTrigger items-center text-darkPurple h-full w-full mt-3 lg:mt-24 justify-start lg:justify-center"
    >
      <h2
        class="lg:text-8xl text-6xl lg:my-9 lg:mb-20 my-10 text-mainWhite bg-mainBlue w-full p-1 OurWorks text-center"
      >
        Our Team consists of :
      </h2>
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
              src="../../assets/images/Kesler.webp"
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
              src="../../assets/images/Chao.webp"
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
              src="../../assets/images/Greez.webp"
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
              src="../../assets/images/Heller.webp"
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
      class="flex items-center relative h-full flex-col justify-start w-full"
    >
      <h2
        class="lg:text-5xl text-3xl mt-28 lg:absolute text-mainBlack px-7 lg:border-b-8 pb-2 border-mainGreen lg:w-textArea lg:px-16 text-center"
      >
        To learn more about the project<span class="font-serif">'</span>s goals,
        timeline, and team, feel free to contact us.
      </h2>
      <div
        class="flex lg:absolute transform lg:translate-y-60 items-center justify-center space-x-2"
      >
        <a href="https://www.instagram.com/hellerkoalas/">
          <button
            class="text-mainGreen cursor-pointer transition ease-in-out duration-150 p-2 hover:bg-mainGreen hover:text-mainWhite rounded-full"
          >
            <PhInstagramLogo :size="66" weight="fill" />
          </button>
        </a>
        <a href="https://twitter.com/Hellerkoalas/">
          <button
            class="text-mainGreen cursor-pointer transition ease-in-out duration-150 p-2 hover:bg-mainGreen hover:text-mainWhite rounded-full"
          >
            <PhTwitterLogo :size="66" weight="fill" />
          </button>
        </a>
        <button
          class="text-mainGreen cursor-pointer transition ease-in-out duration-150 p-2 hover:bg-mainGreen hover:text-mainWhite rounded-full"
        >
          <PhTelegramLogo :size="66" weight="fill" />
        </button>
        <a>
          <button
            class="text-mainGreen cursor-pointer transition ease-in-out duration-150 p-2 hover:bg-mainGreen hover:text-mainWhite rounded-full"
          >
            <PhWhatsappLogo :size="66" weight="fill" />
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
import { PhCaretCircleLeft, PhTwitterLogo } from "@phosphor-icons/vue";
import {
  PhWhatsappLogo,
  PhInstagramLogo,
  PhTelegramLogo,
  PhMapPin,
  PhPhoneCall,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();

import { onMounted, ref } from "vue";
const startAnimation1 = () => {
  $gsap.to(".img", { rotation: 360, ease: "Linear.easeNone", duration: 0.2 });
};
const endAnimation1 = () => {
  $gsap.to(".img", { rotation: 0, ease: "Linear.easeNone", duration: 0.2 });
};
const startAnimation = () => {
  $gsap.to(".Hi", { x: 27, ease: "Linear.easeNone", duration: 0.2 });
};
const endAnimation = () => {
  $gsap.to(".Hi", { x: 0, ease: "Linear.easeNone", duration: 0.2 });
};

const StartExam = () => {
  $gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: "#Present",
      autoKill: false,
    },
    ease: "power4.out",
  });
};

onMounted(() => {
  const TL = $gsap.timeline();
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

  TL.from(".Acapulco", {
    y: 50,
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.5,
  });

  TL.from(".Creative", {
    opacity: 0,
    ease: "Linear.easeNone",
    duration: 0.3,
  });
  TL.from(".Monke", {
    opacity: 0,
    y: 30,
    ease: "Linear.easeNone",
    duration: 0.5,
  });
  $gsap.from(".SectionDiv", {
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
  $gsap.from(".TEAM", {
    scale: 0.7,
    y: -100,
    duration: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0.5,
      trigger: ".TEAMT",
    },
  });
  $gsap.from(".Monkey1", {
    scale: 0.9,
    opacity: 0,
    stagger: 0.2,
    x: 100,
    duration: 0.8,
    ease: "expo.out",
    scrollTrigger: {
      start: "top center",
      end: "bottom bottom",
      trigger: ".Monkey1T",
      toggleActions: "play none none reverse",
    },
  });
  $gsap.from(".logo", {
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
  // $gsap.from(".OurWork", {
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
  font-family: "Oxygen";
  src: url("../../assets/fonts/psycharegular-yq334.otf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
@font-face {
  font-family: "OXY";
  src: url("../../assets/fonts/ThunderDemo.ttf");
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
    #0252f2 29%,
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

.OurWorks {
  font-family: "Oxygen";
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
