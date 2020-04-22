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
          @showAll="showAll"
        />
        <card
          title="Incomes"
          :items="incomeItems"
          v-if="selectedTab == 'all' || selectedTab == 'incomes'"
          @showAll="showAll"
        />
        <card
          title="Outcomes"
          :items="outcomeItems"
          v-if="selectedTab == 'all' || selectedTab == 'outcomes'"
          @showAll="showAll"
        />
      </div>
    </v-content>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-fade-transition>
      <v-overlay v-if="showOverlay">
        <card :title="selectedCardTitle" :items="itemsAll" :is-all="true" />
        <v-fab-transition>
          <v-btn
            color="error"
            fab
            large
            dark
            bottom
            left
            class="overlay--close"
            @click="showOverlay = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-overlay>
    </v-fade-transition>
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
    showSearchMobile: false,
    itemsAll: [],
    showOverlay: false,
    selectedCardTitle: "",
    overlay: false
  }),

  computed: {
    ...mapGetters([
      "offerItems",
      "incomeItems",
      "outcomeItems",
      "selectedTab",
      "offerItemsAll",
      "incomeItemsAll",
      "outcomeItemsAll"
    ])
  },

  methods: {
    showAll(title) {
      this.selectedCardTitle = title.toLowerCase().slice(0, -1);
      this.itemsAll = this[`${this.selectedCardTitle}ItemsAll`];
      this.overlay = true;

      setTimeout(() => {
        this.overlay = false;
        this.showOverlay = true;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-search {
  position: absolute;
  width: 100%;
}

.overlay--close {
  top: 0;
  right: 0;
  position: absolute;
  transform: translate(50%, -50%);
}
</style>
