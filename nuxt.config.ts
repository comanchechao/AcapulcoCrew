export default defineNuxtConfig({
  modules: ["@hypernym/nuxt-gsap"],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      motionPath: true,
      scrollTo: true,
    },
  },

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
