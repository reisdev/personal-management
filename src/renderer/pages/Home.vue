<template>
        <v-card raised>
            <v-card-title >
               <span class='headline justify'> Welcome, {{username}}!</span>
            </v-card-title>
        </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["username"])
  }
};
</script>

<style>

</style>