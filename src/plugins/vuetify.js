import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#222f3e",
        secondary: "#5f27cd",
        accent: "#747d8c",
        error: "#353b48",
        success: "#01a3a4",
        info: "#57606f"
      }
    }
  }
});
