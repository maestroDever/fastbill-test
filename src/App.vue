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

    <v-content> </v-content>
  </v-app>
</template>

<script>
import SearchBox from "@/components/AppBarSearchBox.vue";
import Tabs from "@/components/AppBarTabs.vue";
export default {
  name: "App",

  components: {
    SearchBox,
    Tabs
  }
};
</script>
