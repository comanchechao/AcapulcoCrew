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
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { PhList } from "@phosphor-icons/vue";

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
