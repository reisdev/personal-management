<template>
  <v-system-bar class="windowbar" window dark>
    <v-spacer></v-spacer>
    <div class="actions">
      <v-icon class="action" @click="windowAction('minimize')">remove</v-icon>
      <v-icon class="action" @click="windowAction('maximize')">check_box_outline_blank</v-icon>
      <v-icon class="action" @click="windowAction('close')">close</v-icon>
    </div>
  </v-system-bar>
</template>

<script>
import { mapActions } from "vuex";
import { remote } from "electron"

export default {
  data() {
    return {
      title: "CasaGo",
      miniVariant: false,
      window: remote.getCurrentWindow()
    };
  },
  methods: {
    ...mapActions(["toggleSideBar"]),
    windowAction(action){
      switch(action){
        case "maximize":
          if(!this.window.isMaximized())
            this.window.maximize()
          else
            this.window.unmaximize()
          break
        case "close":
          this.window.close()
          break
        case "minimize":
          this.window.minimize()
          break
      }
    }
  }
};
</script>

<style scoped>
</style>
