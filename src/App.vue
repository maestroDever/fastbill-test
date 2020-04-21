<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="https://via.placeholder.com/150"
            transition="scale-transition"
            width="40"
            rounded
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-tabs v-model="tab" centered dark icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#all">
          All
        </v-tab>

        <v-tab href="#offers">
          Offers
        </v-tab>

        <v-tab href="#incomes">
          Incomes
        </v-tab>

        <v-tab href="#outcomes">
          Outcomes
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <search-box />
    </v-app-bar>

    <v-content> </v-content>
  </v-app>
</template>

<script>
import SearchBox from "@/components/AppBarSearchBox.vue";
export default {
  name: "App",

  components: {
    SearchBox
  },

  data: () => ({
    tab: null
  })
};
</script>
