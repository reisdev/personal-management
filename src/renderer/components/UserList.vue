<template>
  <v-card>
    <v-card-title class="headline">Usuários</v-card-title>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="user in users" v-bind:key="user.id">
          <v-card light>
            <v-card-title primary-title class="headline">{{user.id}} : {{user.name}}</v-card-title>
            <v-card-text>
              <p>Birthday: {{ formatDate(user.birthday)}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted: async function() {
    this.users = await this.$backend.User.findAll();
  },
  methods: {
    formatDate: data => {
      let formatted = new Date(data);
      return formatted.toLocaleDateString("pt-br");
    }
  }
};
</script>

<style scoped>
.user {
  margin-top: 20px !important;
}
</style>
