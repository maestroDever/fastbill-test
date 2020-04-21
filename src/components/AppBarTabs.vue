<template>
  <v-tabs v-model="tab" centered dark icons-and-text>
    <v-tabs-slider></v-tabs-slider>

    <v-tab v-for="value in tabs" :key="value" :href="`#${value}`">
      {{ value }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    tabs: ["all", "offers", "incomes", "outcomes"]
  })
};
</script>

<style lang="scss" scoped></style>
