<template>
  <v-card
    class="mx-auto px-5 py-2"
    color="info"
    dark
    max-width="400"
    raised
    min-width="320"
  >
    <v-card-title class="border-bottom" border="bottom">
      <span class="title font-weight-bold">{{ title }}</span>
    </v-card-title>

    <v-divider dark></v-divider>

    <v-card-text class="headline font-weight-bold">
      <v-list-item v-for="item in items" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>

    <v-card-actions>
      <v-row align="center" justify="space-around">
        <v-btn dark color="accent" tile>Add {{ title }}</v-btn>
        <v-btn
          dark
          tile
          color="success"
          :loading="showAllLoading"
          @click="showAll"
          >Show all</v-btn
        >
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",

  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    addFunction: {
      type: Function,
      default: null
    },
    showAllFunction: {
      type: Function,
      default: null
    }
  },

  data: () => ({
    showAllLoading: false
  }),

  methods: {
    showAll() {
      this.showAllLoading = true;
      setTimeout(() => {
        this.showAllLoading = false;
      }, 1500);
    }
  }
};
</script>

<style lang="scss" scoped></style>
