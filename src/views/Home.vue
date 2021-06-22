<template>
  <v-container>
    <h1>List of products</h1>

    <v-row>
      <v-col cols="12" sm="4" v-for="product of products" :key="product.id">
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                :src="product.image"
                style="object-fit: contain"
                height="200px"
            ></v-img>

            <v-card-title>
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ 'Quantité : ' + product.quantity }}
            </v-card-subtitle>

            <v-card-actions>
                <h3 style="margin-left: 10px">
                  {{ product.price + ' €' }}
                </h3>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="show = !show"
              >
                <v-icon @click="addToCart(product)">mdi-cart-arrow-down</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>

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
  },
  methods: {
    addToCart(product) {
      debugger;
      if (product.quantity > 0) {
        const index = this.$store.state.cart.items.findIndex(x => x.id === product.id);
        if (index >= 0) {
          this.$store.state.cart.items[index].quantity ++;
          this.$store.state.cart.items[index].totalPrice += product.price;
        } else {
          this.$store.state.cart.items.push({
            id: product.id,
            name: product.name,
            quantity: 1,
            unitPrice: product.price,
            totalPrice: product.price,
            image: product.image,
          })
        }
        product.quantity --;
        this.$store.state.cart.nb ++;
        this.$store.state.cart.price += product.price;
      } else {
        alert('Article non disponible')
      }
    }
  }
}
</script>

<style scoped>

</style>
