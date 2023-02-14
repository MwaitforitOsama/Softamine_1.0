<template>
  <v-row>
    <v-col cols="12">
      <carousel-3d
        count="items.length"
        :controls-visible="true"
        :controls-prev-html="'&#10092; '"
        :controls-next-html="'&#10093;'"
        :controls-width="30"
        :controls-height="60"
        :clickable="false"
        :space="500"
      >
        <slide v-for="(item, i) in items" :key="i" :index="i">
          <v-spacer></v-spacer>
          <v-card class="mx-auto" max-width="344">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>Hello</v-card-subtitle>
            <v-card-actions>
              <v-card-text>{{ item.description }}</v-card-text>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </slide>
      </carousel-3d>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: { Carousel3d, Slide },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Item 1",
          description: "This is the first item",
          image: "black",
        },
        {
          id: 2,
          title: "Item 2",
          description: "This is the second item",
          image: "purple",
        },
        {
          id: 3,
          title: "Item 3",
          description: "This is the third item",
          image: "red",
        },
        {
          id: 4,
          title: "Item 4",
          description: "This is the forth item",
          image: "yellow",
        },
        {
          id: 5,
          title: "Item 5",
          description: "This is the fifth item",
          image: "pink",
        },
      ],
    };
  },
  mounted() {
    this.$refs.carousel.setDefaults({
      items: 3,
    });
  },
};
</script>

<style scoped>
.carousel-3d-container[data-v-07917306] {
  height: 340px !important;
}
.carousel-3d-slide {
  height: 330px !important;
}
</style>
