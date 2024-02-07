<template>
  <div class="drawer w-auto drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label
        for="my-drawer-4"
        class="drawer-button text-mainPurple w-10 cursor-pointer"
      >
        <PhList size="35"
      /></label>
    </div>
    <div class="drawer-side z-30">
      <label
        for="my-drawer-4"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-mainWhite text-base-content">
        <!-- Sidebar content here -->
        <LazyMButton class=" ">
          <template #Text>
            <span class="flex space-x-2 items-center justify-center">
              <span>Websites</span>
              <PhLaptop size="25" :weight="fill" />
            </span>
          </template>
        </LazyMButton>
        <div class="dropdown dropdown-hover">
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
        <div class="dropdown dropdown-hover">
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
            class="dropdown-content z-[1] menu text-xl border-4 border-mainGreen bg-mainWhite text-darkPurple rounded-sm w-52"
          >
            <li>
              <NuxtLink to="/nfts/acaplcoKoalas">Acapulco Koalas</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/nfts/acapulcoMonkeys">Acapulco Koalas</NuxtLink>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { PhLaptop, PhList, PhCaretDown } from "@phosphor-icons/vue";

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
    stagger: 0.4,
  });
});
</script>
