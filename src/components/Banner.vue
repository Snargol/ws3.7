<template>
  <v-app-bar
      app
      color="indigo darken-4"
      dark>
    <v-btn icon>
      <v-img src="../assets/logo.png" width="50"></v-img>
    </v-btn>

    <v-spacer></v-spacer>

    <router-link to="/" class="white--text" style="text-decoration: none">
      <v-icon>mdi-home</v-icon>
      Home
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/Cart" class="white--text" style="text-decoration: none">
      <v-icon>mdi-cart</v-icon>Panier {{ $store.state.cart.nb }}
    </router-link>

  </v-app-bar>
</template>

<script>

export default {
  name: "Banner"
}
</script>

<style scoped>

</style>
