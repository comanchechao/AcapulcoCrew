<template>
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
        src="../assets/images/Footer.webp"
        class="w-screen object-cover"
        alt=""
      />
    </div>
  </template>
  
  <script setup>import {
     PhInstagramLogo,
     PhTwitterLogo,
    PhDiscordLogo
  } from "@phosphor-icons/vue";</script>
  
   