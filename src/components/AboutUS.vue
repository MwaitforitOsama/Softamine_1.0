<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="companyLogo" alt="Company logo" class="mx-auto" height="200" />
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="display-1">{{ companyName }}</h1>
        <p class="body-1">{{ companyTagline }}</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="headline">Our Mission</h2>
        <p class="body-2">{{ companyMission }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="headline">Our Team</h2>
        <v-card v-for="member in teamMembers" :key="member.name">
          <v-list-item three-line>
            <v-list-item-avatar>
              <v-img :src="member.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ member.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ member.title }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ member.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      companyName: "SoftaMine Inc.",
      companyTagline: "Shaping Ideas Into Reality",
      companyLogo: "none",
      companyMission:
        "At SoftaMine Inc., we strive to provide the best products and services to our clients. We are constantly innovating and finding ways to make a positive impact on the world around us.",
      teamMembers: [
        {
          name: "Mohammad Osama",
          title: "COO/CFO",
          avatar: "https://via.placeholder.com/100x100",
          email: "osama.osamalink@gmail.com",
        },
        {
          name: "Hanzalah Imran",
          title: "CTO",
          avatar: "https://via.placeholder.com/100x100",
          email: "none",
        },
        {
          name: "Hassan",
          title: "CEO",
          avatar: "https://via.placeholder.com/100x100",
          email: "none",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 950px) {
  .col-12 {
    padding-top: 70px !important;
  }
}
</style>
