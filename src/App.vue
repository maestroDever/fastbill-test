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

      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Search"
        solo-inverted
        rounded
        prepend-inner-icon="mdi-magnify"
      ></v-autocomplete>
    </v-app-bar>

    <v-content> </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null,
    states: ["Alabama", "Alaska", "American Samoa"],
    tab: null
  }),

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>
