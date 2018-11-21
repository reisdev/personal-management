<template>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.native="toggleSideBar"></v-toolbar-side-icon>
      <v-btn 
        icon
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "CasaGo",
      miniVariant: false
    };
  },
  methods: {
    ...mapActions(["toggleSideBar"])
  }
};
</script>

<style scoped>

</style>
