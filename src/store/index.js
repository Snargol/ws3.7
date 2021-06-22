import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Chaussettes",
        image: "https://w7.pngwing.com/pngs/743/434/png-transparent-sock-t-shirt-socks-miscellaneous-tshirt-ink-thumbnail.png",
        color: 'green',
        quantity: 5,
        price: 5,
        inStock: true
      },
      {
        id: 2,
        name: "Gants",
        image: "https://w7.pngwing.com/pngs/352/175/png-transparent-medical-glove-gloves-blue-image-file-formats-hand-thumbnail.png",
        color: 'yellow',
        quantity: 10,
        price: 3,
        inStock: true
      },
      {
        id: 1,
        name: "Casquette",
        image: "https://w7.pngwing.com/pngs/788/80/png-transparent-black-nike-fitted-cap-baseball-cap-nike-flat-cap-hat-caps-caps-black-clothing-accessories-thumbnail.png",
        color: 'blue',
        quantity: 0,
        price: 6,
        inStock: false
      }
    ],
    cart: {
      nb: 0,
      items: [],
      price: 0
    }
  },
  getters: {
    products: state => state.products,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
