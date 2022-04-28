export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Easy Planner",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    bodyAttrs: {
      style:
        "background-image: linear-gradient(to left bottom, #683fb5, #4c73d4, #519de3, #81c2e8, #c1e3ee); background-image: linear-gradient(to right top, #c1e3ee, #abd6ea, #99c7e8, #8db8e4, #87a8df, #809bdb, #7c8dd6, #7c7ecf, #756fca, #6f60c4, #6b50bd, #683fb5); background-image: linear-gradient(to bottom, #c1e3ee, #abd6ea, #99c7e8, #8db8e4, #87a8df, #809bdb, #7c8dd6, #7c7ecf, #756fca, #6f60c4, #6b50bd, #683fb5);",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt-hero-icons/outline/nuxt",
    "@nuxt-hero-icons/solid/nuxt",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          //import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: "/",
    extendRoutes(routes, resolve) {
      routes.push({
          name: "kanban",
          path: "/kanban",
          component: resolve(__dirname, "pages/kanban.vue"),
        }, {
          name: "project-list",
          path: "/project-list",
          component: resolve(__dirname, "pages/project-list.vue"),
        },
      );
    },
  },
};
