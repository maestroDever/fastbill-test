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

      <div class="d-md-block d-sm-none">
        <search-box />
      </div>

      <v-btn
        icon
        class="d-md-none"
        @click="showSearchMobile = !showSearchMobile"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="px-md-12 px-6">
      <div
        class="mobile-search d-flex justify-end my-2"
        v-if="showSearchMobile"
        transition="fab-transition"
      >
        <div class="col-4 pa-0">
          <search-box />
        </div>
      </div>
      <div class="d-flex justify-space-around mt-12 flex-md-row flex-wrap">
        <card
          title="Offers"
          :items="offerItems"
          v-if="selectedTab == 'all' || selectedTab == 'offers'"
        />
        <card
          title="Incomes"
          :items="incomeItems"
          v-if="selectedTab == 'all' || selectedTab == 'incomes'"
        />
        <card
          title="Outcomes"
          :items="outcomeItems"
          v-if="selectedTab == 'all' || selectedTab == 'outcomes'"
        />
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

  data: () => ({
    showSearchMobile: false
  }),

  computed: {
    ...mapGetters(["offerItems", "incomeItems", "outcomeItems", "selectedTab"])
  }
};
</script>

<style lang="scss" scoped>
.mobile-search {
  position: absolute;
  width: 100%;
}
</style>
