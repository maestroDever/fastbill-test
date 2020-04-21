<template>
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
</template>

<script>
export default {
  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null,
    states: ["Alabama", "Alaska", "American Samoa"]
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

<style lang="scss" scoped></style>
