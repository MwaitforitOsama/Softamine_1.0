<template>
  <v-app>
    <v-main>
      <div class="header"><MyHeader /></div>

      <router-view />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyFooter from "../src/components/MyFooter.vue";
import MyHeader from "../src/components/MyHeader.vue";

export default {
  name: "App",
  components: {
    MyFooter: MyFooter,
    MyHeader: MyHeader,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application .display-2 {
  font-family: "Montserrat" !important;
  font-weight: bold !important;
}
.v-application .font-weight-regular {
  font-family: "Montserrat" !important;
  font-weight: 600 !important;
}
</style>
