<template>
        <v-card raised>
            <v-card-title >
               <span class='headline justify'> Seja bem vindo, {{username}}!</span>
            </v-card-title>
            <v-card-text>
              <p :key="user.id" v-for="user in users"> {{user.name}} </p>
            </v-card-text>
        </v-card>
</template>

<script>
import { mapGetters } from "vuex";

import { User } from '../../backend/controllers';

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
  },
  mounted: async function(){
      this.users = await User.findAll()
  },
  computed: {
    ...mapGetters(["username"])
  },
  components: {
    User
  }
};
</script>

<style>

</style>