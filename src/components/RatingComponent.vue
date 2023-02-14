<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" margin-top="10" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Testimonials</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ nofClient + 1 }} {{ names[nofClient] }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ Tests[nofClient] }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          v-bind:color="color[nofClient]"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text @click="ClientInc"> Next </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nofClient: 1,
      names: ["Osama", "Hanzalah", "Hassan", "Obaiz", "Junaid"],
      Tests: [
        "Very Professional team",
        "Very strong tech knowledge",
        "Loved their Professionalism",
        "very competetitive",
        "Nice job",
      ],
      color: ["green", "red", "orange", "black", "pink"],
    };
  },
  methods: {
    ClientInc() {
      if (this.nofClient === this.names.length - 1) {
        this.nofClient = 0;
      } else {
        this.nofClient = this.nofClient + 1;
      }
    },
  },
};
</script>

<style scoped>
.v-sheet.v-card {
  max-width: 750px !important;
}
.container {
  background-color: black;
  padding-top: 25px;
  padding-bottom: 25px;
  max-width: 100%;
  margin-top: 100px;
}
</style>
