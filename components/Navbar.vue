<template>
  <div
    class="h-32 w-screen bg-mainWhite flex items-center justify-around space-x-9 px-10"
  >
    <div class="flex items-center space-x-9">
      <LazyMButton class="Navbar opacity-0">
        <template #Text>Artworks</template> </LazyMButton
      ><LazyMButton class="Navbar opacity-0">
        <template #Text>Websites</template>
      </LazyMButton>
    </div>
    <img
      :onmouseleave="endAnimation"
      :onmouseover="startAnimation"
      src="../assets/images/Logo.webp"
      class="w-24 object-contain img cursor-pointer Navbar opacity-0"
      alt=""
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

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

<style>
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
.Button:hover::after {
  transform: scale(1, 1);
}
.Button {
  position: relative;
  width: 10rem;
  padding: 0.5rem 0;
  transition: all 1s ease-in-out;
}
</style>
