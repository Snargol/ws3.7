<template>
  <v-container>
    <h1>List of products</h1>

<!--    <div v-for="product of products">-->
<!--      <h2>{{ product.name }}</h2>-->
<!--      <text></text>-->
<!--    </div>-->

  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: 'ALI'
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
}
</script>

<style scoped>

</style>
