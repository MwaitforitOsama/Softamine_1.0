<template>
  <v-container>
    <v-layout row wrap align-center>
      <v-flex xs12 md6 lg6 xl6>
        <v-img aspect-ratio="1.5" src="../assets/radom.jpg" alt="Dev" />
      </v-flex>
      <v-flex xs12 md6 lg6 xl6>
        <h2>Our Mission</h2>
        <p>{{ message }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message:
        "We at SoftaMine believe in productivity, innovation and creativity. Providing solutions to problems has been our key motivator. Our firm strives to be the epitome of professionalism and excellence. We offer our clients complete digital agility, with just 1 number to call for all of their digital needs. Our skilled team is able to understand both the technical and business challenges when creating digital products. We value your ideas the most. You dream, we deliver!",
    };
  },
  // Your component data and methods go here
};
</script>

<style scoped>
.v-application p {
  padding-top: 30px;
  font-family: monospace;
  font-size: 18px;
  margin: 10px;
  text-align: justify;
}
h2 {
  text-align: center;
}
.row {
  background-color: white !important;
}
</style>
