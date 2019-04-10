<template>
  <div id="app">
    <v-app ref='app' dark>
    <TopBar/>
      <v-navigation-drawer
        fixed
        app
        v-model='sidebar'
      >
        <LeftSideBar/>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <v-footer app>
        <v-spacer/>
        <span>&copy;2018</span>
        <v-spacer/>
      </v-footer>
    </v-app>
  </div>
</template>

<script>

import LeftSideBar from "@/components/LeftSideBar";
import TopBar from "@/components/TopBar";
import "./assets/css/style.css"

import { mapActions } from "vuex";

export default {
  name: "personal-management",
  components: {
    LeftSideBar,
    TopBar
  },
  data: () => ({
    fixed: false,
    sidebar: false,
    window: remote.getCurrentWindow()
  }),
  methods: {
    ...mapActions(["storeRef"])
  },
  mounted() {
    this.storeRef(this);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons");
/* Global CSS */
</style>
