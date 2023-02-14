<template>
  <v-container fluid>
    <v-flex>
      <div>
        <h1 class="display-2 font-weight-bold mb-3">Technologies We Work On!</h1>
      </div>
    </v-flex>
    <v-row>
      <v-col cols="3">
        <img src="../assets/mongo.png" width="65" height="65" />
      </v-col>
      <v-col cols="3">
        <img src="../assets/logo.png" width="50" height="50" />
      </v-col>
      <v-col cols="3">
        <img src="../assets/ReactNative.png" width="100" height="60" />
      </v-col>
      <v-col cols="3">
        <img src="../assets/React-icon.svg.png" width="57" height="45" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <img src="../assets/Nodejs.png" width="70" height="50" />
      </v-col>
      <v-col cols="3">
        <img src="../assets/Pi.png" width="80" height="80" />
      </v-col>
      <v-col cols="3">
        <img src="../assets/Python.png" width="55" height="55" />
      </v-col>
      <v-col cols="3">
        <img src="../assets/AWS.webp" width="70" height="60" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
.container {
  text-align: center !important;
  background-color: rgba(255, 255, 255, 0.8);
  max-width: 100% !important;
}
.v-application .display-2 {
  text-align: center !important;
  justify-content: center !important;
  color: black !important;
  margin: 5px;
  padding-bottom: 15px;

  line-height: 110% !important;
}
</style>
