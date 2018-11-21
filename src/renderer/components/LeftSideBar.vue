<template>
    <v-list>
        <v-list-tile 
        router
        :to="item.to"
        :key="i"
        v-for="(item, i) in items"
        exact
        >
        <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
  name: "left-side-bar",
  data: () => {
    return {
      items: [
        { icon: "apps", title: "Página Inicial", to: "/" },
        { icon: "person_add", title: "Registrar-se", to: "/register" }
      ]
    };
  }
};
</script>

<style scoped>

</style>


