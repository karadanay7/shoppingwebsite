// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-lodash",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-lazy-load",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    "@nuxtjs/html-validator",
  ],
  supabase: {
    redirect: false,
  },
  // routeRules: {
  //   // Homepage pre-rendered at build time
  //   "/": { prerender: true },
  //   // Product page generated on-demand, revalidates in background
  //   "/products/**": { swr: true },
  //   // Blog post generated on-demand once until next deploy

  //   // Admin dashboard renders only on client-side

  //   // Add cors headers on API routes
  //   "/api/**": { cors: true },
  //   // Redirects legacy urls
  // },
  nitro: {
    compressPublicAssets: true,
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  app: {
    head: {
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
      htmlAttrs: {
        lang: "en",
      },

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logoico.png",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "Aysegul Karadan | Full-Stack Web Developer | Nuxt.js 3 and Vue.js | HTML5 | CSS | JavaScript | Tailwind | Bootstrap | EcmaScript | Pinia",
      meta: [
        {
          name: "description",
          content:
            "Experienced Full-Stack Web Developer | Nuxt.js 3 | Vue.js | HTML5 | CSS | JavaScript | Tailwind | Bootstrap | EcmaScript | Pinia Discover the talent of Aysegul Karadan, a full-stack web developer specializing in Nuxt.js 3 and Vue.js. With a passion for clean and efficient code, I strive to deliver high-quality web solutions. Explore my portfolio and let's build something remarkable together",
        },
      ],
    },
  },
});
