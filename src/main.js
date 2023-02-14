import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Carousel3d from "vue-carousel-3d";

Vue.use(Carousel3d);

import VueParticles from "vue-particles";
Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: {
    App,
  },
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
