<template>

</template>

<script>
import { mapGetters } from "vuex";

import { User, Invoice } from '../../backend/controllers';

export default {
  data() {
    return {
      users: [],
      expenses: []
    }
  },
  methods: {
  },
  mounted: async function(){
      Invoice.create(250.9,Date("2018-11-22").toString(),"Qualquekjdhaksjdhr coisa")
      this.users = await User.findAll()
      this.expenses = await Invoice.findAll()
      console.log(this.expenses)
  },
  computed: {
    ...mapGetters(["username"])
  }
};
</script>

<style>

</style>