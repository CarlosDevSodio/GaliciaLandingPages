import { createApp } from "vue";
import App from "./App.vue";

import Vue3Toastify from "vue3-toastify";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";
import "@/styles/bootstrap-styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "@/styles/fonts.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa: { component: "v-icon" },
    },
  },
});

createApp(App)
  .use(vuetify)
  .use(Vue3Toastify, {
    position: "top-right",
  })
  .use(router)
  .mount("#app");
