<template>
  <v-container>
    <v-row>
      <v-col cols="4">Column 1</v-col>
      <v-col cols="4">
        <v-layout class="align-center">
          <v-flex class="text-center">
            <vue-card-stack :cards="services" :stack-width="360" :card-width="280">
              <template v-slot:card="{ card }">
                <v-card
                  :color="card.color"
                  class="mx-auto"
                  style="width: 100%; height: 100%"
                >
                  <v-card-title class="headline font-weight-bold white--text">{{
                    card.name
                  }}</v-card-title>
                  <v-card-text class="white--text">{{ card.description }}</v-card-text>
                </v-card>
              </template>
              <template v-slot:nav="{ onNext, onPrevious }">
                <nav class="nav">
                  <v-btn @click="onPrevious" class="mx-2" fab dark small color="primary">
                    <v-icon dark> mdi-minus </v-icon>
                  </v-btn>
                  <v-btn @click="onNext" class="mx-2" fab dark small color="primary">
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                </nav>
              </template>
            </vue-card-stack>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col cols="4">Column 3</v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueCardStack from "vue-card-stack";
export default {
  components: {
    VueCardStack,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Web Development",
          description:
            "We specialize in creating custom, responsive, and user-friendly websites using the latest web development technologies.",
          color: "indigo darken-2",
        },
        {
          id: 2,
          name: "App Development",
          description:
            "Our team of experienced app developers can create native or cross-platform apps for iOS, Android, and other platforms.",
          color: "teal darken-2",
        },
        {
          id: 3,
          name: "IoT",
          description:
            "We can help you connect your devices and systems to the internet and build custom IoT solutions for your business.",
          color: "deep-orange darken-2",
        },
        {
          id: 4,
          name: "Digital Marketing",
          description:
            "Our digital marketing experts can help you reach your target audience and grow your brand online through SEO, PPC, and social media marketing.",
          color: "pink darken-2",
        },
        {
          id: 5,
          name: "Software Development",
          description:
            "We offer custom software development services for businesses of all sizes, from small startups to large enterprises.",
          color: "purple darken-2",
        },
        {
          id: 6,
          name: "Machine Learning/AI",
          description:
            "Our team of data scientists and machine learning experts can help you harness the power of AI to solve complex business problems.",
          color: "cyan darken-2",
        },
        {
          id: 7,
          name: "Virtual Assistance",
          description:
            "We offer virtual assistance services to help you manage your business and handle tasks such as scheduling, data entry, and customer support.",
          color: "green darken-2",
        },
      ],
      currentIndex: 0,
    };
  },
};
</script>

<style>
.headline {
  text-transform: uppercase;
}

.vue-card-stack__wrapper[data-v-0822879c] {
  text-align: -webkit-center;
}
</style>
