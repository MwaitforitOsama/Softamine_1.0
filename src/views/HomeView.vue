<template>
  <div class="content">
    <div>
      <hello-world />
    </div>
    <NewTech />

    <MyCarousel />
    <Services />

    <ImageBox />
  </div>
</template>

<!-- <template>
  <contactform />
</template> -->
<script>
// import contactform from "../src/components/Forms.vue";
import HelloWorld from "../components/HelloWorld";
import Services from "../components/OurServices.vue";

import ImageBox from "../components/ImageBox.vue";
import NewTech from "../components/NewTech.vue";
// import RatingComponent from "../components/RatingComponent.vue";

import MyCarousel from "../components/MyCarousel.vue";
export default {
  name: "newHome",

  components: {
    HelloWorld,
    Services,
    MyCarousel,

    ImageBox,
    NewTech,
  },
};
</script>
