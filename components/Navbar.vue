<template>
  <div
    class="h-32 w-screen bg-mainWhite flex items-center justify-between px-7 space-x-9 lg:px-10"
  >
    <div class="flex items-center lg:w-full justify-around">
      <div class="lg:flex hidden items-center justify-center space-x-9">
        <div class="dropdown dropdown-hover Navbar opacity-0">
          <div
            tabindex="0"
            role="button"
            class="text-2xl flex items-center justify-center cursor-pointer pb-1 text-gray-900 Button border-b-4 rounded-md border-transparent transition-all ease-linear duration-150 hover:border-mainPink"
          >
            <span>NFTs</span>
            <PhCaretDown size="25" weight="fill" />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu text-lg border-4 border-mainGreen bg-mainWhite text-darkPurple rounded-sm w-52"
          >
            <li>
              <NuxtLink to="/nfts/acapulcoKoalas">Acapulco Koalas</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/nfts/acapulcoMonkeys">Acapulco Monkeys</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-hover Navbar opacity-0">
          <div
            tabindex="0"
            role="button"
            class="text-2xl flex items-center justify-center cursor-pointer pb-1 text-gray-900 Button border-b-4 rounded-md border-transparent transition-all ease-linear duration-150 hover:border-mainPink"
          >
            <span>Artworks</span>
            <PhCaretDown size="25" weight="fill" />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu text-xl border-4 border-mainGreen bg-mainWhite text-darkPurple rounded-sm w-52"
          >
            <li><a>Wall Graffiti</a></li>
            <li><a>Digital Paintings</a></li>
          </ul>
        </div>
        <LazyMButton class="Navbar opacity-0">
          <template #Text>Websites</template>
        </LazyMButton>
        <w3m-button />
      </div>
      <img
        :onmouseleave="endAnimation"
        :onmouseover="startAnimation"
        src="../assets/images/Logo.webp"
        class="lg:w-24 w-20 object-contain img cursor-pointer Navbar opacity-0"
        alt=""
      />
    </div>
    <LazyPhoneNavbar class="lg:hidden flex" />
  </div>
</template>

<script setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import { onMounted } from "vue";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";

import { mainnet, arbitrum } from "viem/chains";
import { reconnect } from "@wagmi/core";

// 1. Define constants
const projectId = "YOUR_PROJECT_ID";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

reconnect(config);
// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

const { $gsap } = useNuxtApp();
const TM = $gsap.timeline({ paused: false });
const startAnimation = () => {
  TM.to(".img", 0.8, { rotation: 360, ease: "Linear.easeNone" });
};
const endAnimation = () => {
  TM.to(".img", 0.3, { rotation: 0, ease: "Linear.easeNone" });
};

onMounted(() => {
  TM.to(".Navbar", {
    opacity: 1,
    ease: "Linear.easeNone",
    duration: 0.7,
    stagger: 0.2,
    delay: 0.5,
  });
});
</script>

<style>
.Button:hover::after {
  transform: scale(1, 1);
}
.Button {
  position: relative;
  width: 10rem;
  padding: 0.5rem 0;
  transition: all 1s ease-in-out;
}
.Button::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.19rem;
  left: 0;
  bottom: 0;
  background: #f72585;
}
.Button::after {
  transform: scale(0, 1);
  transition: transform 0.3s ease-in;
}
</style>
