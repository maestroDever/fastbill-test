<template>
  <v-tabs
    v-model="tab"
    centered
    dark
    icons-and-text
    show-arrows
    mobile-break-point="768"
    center-active
  >
    <v-tabs-slider></v-tabs-slider>

    <v-tab v-for="value in tabs" :key="value" :href="`#${value}`">
      {{ value }}
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    tab: null,
    tabs: ["all", "offers", "incomes", "outcomes"]
  }),

  methods: {
    ...mapMutations(["updateTab"])
  },

  watch: {
    tab(value) {
      this.updateTab(value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
