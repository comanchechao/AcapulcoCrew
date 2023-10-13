export default defineNuxtConfig({
  //  gsap: {
  //   extraPlugins: {
  //     scrollTrigger: true,
  //     motionPath: true,
  //   },
  // },
  pages: true,
  css: ["~/assets/css/main.css"],
  // build: {
  //   transpile: ["primevue"],
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
