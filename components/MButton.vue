<template>
  <button
    class="text-2xl pb-1 text-gray-900 Button border-b-4 rounded-md border-transparent transition-all ease-linear duration-150 hover:border-mainPink"
  >
    <slot name="Text"></slot>
  </button>
</template>

<script setup></script>

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
