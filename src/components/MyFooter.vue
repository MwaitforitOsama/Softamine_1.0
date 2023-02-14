<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4 white--text"
          icon
          :href="icon.Link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>SoftaMine. All Rights Reserved!</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "mdi-facebook",
        Link: "https://web.facebook.com/people/SoftaMine/100089966884888/",
      },
      { name: "mdi-twitter", Link: "https://twitter.com/SoftaMineInc" },
      {
        name: "mdi-linkedin",
        Link: "https://www.linkedin.com/company/softamine/",
      },
      {
        name: "mdi-instagram",
        Link: "https://www.instagram.com/softamine.inc/",
      },
    ],
  }),
  props: [],
};
</script>

<style>
.v-application .indigo.lighten-1 {
  width: 100%;
  background-color: black !important;
}
</style>
