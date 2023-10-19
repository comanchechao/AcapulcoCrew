<template>
  <div class="h-full w-screen bg-mainWhite">
    <Navbar />
    <div class="h-screen w-full flex items-center justify-center py-32 px-72">
      <div
        class="w-full flex flex-col items-start h-full bg-mainWhite rounded-md"
      >
        <h2
          :onmouseleave="endAnimation"
          :onmouseover="startAnimation"
          class="text-8xl italic Hi cursor-pointer"
        >
          Hi!
        </h2>
        <div class="flex items-center space-x-6">
          <h2 class="text-8xl italic We">We Are</h2>
          <h2 class="text-8xl Acapulco">Acapulco Crew</h2>
        </div>
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
});
</script>

<style scoped>
.Acapulco {
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
</style>
