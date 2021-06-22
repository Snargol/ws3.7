<template>
  <v-container>
    <h1>List of products</h1>

    <v-list>
      <v-list-item-group>
        <v-list-item
            v-for="(item, i) in products"
            :key="i"
        >
          <v-list-item-content>
            <v-row>
              <v-col>
                <img
                    :src="item.image"
                    style="object-fit: contain; height: 50px; width: 50px"
                />
              </v-col>
              <v-col>
                <label v-text="item.name"></label>
              </v-col>

              <v-col>
                <label>
                  {{ item.quantity }}
                </label>
              </v-col>
              <v-col>
                <label>
                  {{ item.totalPrice + '€' }}
                </label>
              </v-col>
            </v-row>


          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </v-container>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    products() {
      return this.$store.state.cart.items;
    }
  },
}
</script>

<style scoped>

</style>
