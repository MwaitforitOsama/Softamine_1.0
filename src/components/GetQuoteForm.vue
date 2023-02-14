<template>
  <v-container id="getquote">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-select
          v-model="service"
          :items="services"
          label="Select a Service"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea
          v-model="description"
          label="Description of Project"
          required
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <v-btn @click="submit" :disabled="false">Get a Quote</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <input type="submit" id="hanzalah" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    service: "",
    description: "",
    budget: "",
    deadline: "",
    agreement: true,
    valid: true,
    nameRules: [(v) => !!v || "Name is required"],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    services: [
      "Web Development",
      "Mobile App Development",
      "Software Development",
      "IT Consulting",
      "Digital Marketing",
      "Virtual Assistants",
      "Other",
    ],
  }),
  methods: {
    submit() {
      var elems = document.body.getElementsByTagName("*");
      console.log(elems);
      // form is valid
      // send the form data to your backend server
    },
  },
  mounted() {
    var btn = document.getElementById("hanzalah");
    console.log(btn);
    btn.addEventListener("click", () => {
      var div = document.body.getElementsByTagName("*");
      for (let i = 0; i < div.length; i++) {
        console.log(div[i].style);
        if (div[i].style.display === "none") {
          div[i].style.display = "block";
        } else {
          div[i].style.display = "none";
          btn.display = "block";
        }
      }
    });
  },
};
</script>
