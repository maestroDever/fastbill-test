<template>
  <v-card
    class="mx-auto my-2 px-5 py-2"
    color="info"
    dark
    max-width="400"
    raised
    :min-width="isAll ? 360 : 320"
  >
    <v-card-title class="border-bottom text-capitalize" border="bottom">
      <span class="title font-weight-bold">
        {{ isAll ? `All ${title}s` : title }}
      </span>
    </v-card-title>

    <v-divider dark></v-divider>

    <v-card-text class="headline font-weight-bold">
      <v-list-item v-for="item in items" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
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
          v-if="!isAll"
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
    isAll: {
      type: Boolean,
      default: false
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
        this.$emit("showAll", this.title);
      }, 1500);
    }
  }
};
</script>

<style lang="scss" scoped></style>
