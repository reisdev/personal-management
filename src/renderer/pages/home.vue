<template>
  <v-layout row wrap>
    <v-flex xs5>
      <user-list/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import UserList from "../components/UserList";

export default {
  data() {
    return {
      users: [],
      expenses: []
    };
  },
  components: {
    UserList
  },
  methods: {},
  mounted: async function() {
    this.users = await this.$backend.User.findAll();
    this.expenses = await this.$backend.Invoice.findAll();
  },
  computed: {
    ...mapGetters(["username"])
  }
};
</script>

<style>
</style>