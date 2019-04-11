<template>
  <v-system-bar class="windowbar" window dark>
    <div class="actions left">
      <v-menu bottom offset-y>
        <a class="action" slot="activator" dark>User</a>
        <v-list dense>
          <v-list-tile v-for="(item, index) in file" :key="index" @click="navigate(item.title)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu bottom offset-y>
        <a class="action" slot="activator" dark>Edit</a>
        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu bottom offset-y>
        <a class="action" slot="activator" dark>Code</a>
        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
    <v-spacer></v-spacer>
    <div class="actions right">
      <v-icon class="action" @click="windowAction('minimize')">remove</v-icon>
      <v-icon class="action" @click="windowAction('maximize')">check_box_outline_blank</v-icon>
      <v-icon class="action" @click="windowAction('close')">close</v-icon>
    </div>
  </v-system-bar>
</template>

<script>
import { mapActions } from "vuex";
import { remote } from "electron";

export default {
  data() {
    return {
      file: [
        {title: "Home"},
        {title: "Register"}
      ],
      window: remote.getCurrentWindow()
    };
  },
  methods: {
    toggleMenu() {
      this.on = !this.on;
    },
    navigate(title){
      this.$router.push(`/user/${title.toLowerCase()}`)
    },
    ...mapActions(["toggleSideBar"]),
    windowAction(action) {
      switch (action) {
        case "maximize":
          if (!this.window.isMaximized()) this.window.maximize();
          else this.window.unmaximize();
          break;
        case "close":
          this.window.close();
          break;
        case "minimize":
          this.window.minimize();
          break;
      }
    }
  }
};
</script>

<style scoped>
</style>

