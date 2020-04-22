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

      <tabs />

      <v-spacer></v-spacer>

      <search-box />
    </v-app-bar>

    <v-content class="px-12">
      <div class="d-flex justify-space-around mt-12">
        <card title="Offers" :items="offerItems" />
        <card title="Incomes" :items="incomeItems" />
        <card title="Outcomes" :items="outcomeItems" />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import SearchBox from "@/components/AppBarSearchBox.vue";
import Tabs from "@/components/AppBarTabs.vue";
import Card from "@/components/Card.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    SearchBox,
    Tabs,
    Card
  },

  computed: {
    ...mapGetters(["offerItems", "incomeItems", "outcomeItems"])
  }
};
</script>
