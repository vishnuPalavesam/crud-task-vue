import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    homeProduct: [],
    cart: [],
    recProducts: [],
  }),
  actions: {
    async getHomeProducts(force = 0) {
      if (this.homeProduct.length === 0 || force === 1) {
        const response = await axios.get('/api/products/index')
        if (response.status === 200 && response.data) {
          const data = response.data
          data.forEach((el) => {
            el.cart = 0
          });
          data.forEach((el) => {
            const cartItem = this.cart.find(item => item.id === el.id)
            if (cartItem) {
              el.cart = cartItem.cart
            }
          })
          this.homeProduct = data
        } else {
          this.homeProduct = []
        }
      }
    },
    addToCart(id) {
      const product = this.homeProduct.find((el) => el.id === id)
      const cartProduct = this.cart.find((el) => el.id === id)
      if (product && !cartProduct) {
        // product.quantity = 1;
        this.cart.push(product);
        // console.log(this.cart[this.cart.length - 1].quantity);
        this.cart[this.cart.length - 1].quantity = 1
        product.cart = 1;
      } else if (product && cartProduct) {
        this.cart = this.cart.filter((el) => el.id !== id)
        product.cart = 0;
      }
    },
    async getRecProduct() {
      if (this.homeProduct.length === 0) {
        await this.getHomeProducts()
        this.recProducts = [...this.homeProduct].sort(() => Math.random() - 0.5).slice(0, 4)
      } else {
        this.recProducts = [...this.homeProduct].sort(() => Math.random() - 0.5).slice(0, 4)
      }
    },
    increaseQuantity(id) {
      // const product = this.homeProduct.find(el=>el.id===id)
      const cartProduct = this.cart.find(el => el.id === id)
      cartProduct.quantity++;
    },
    decreaseQuantity(id) {
      // const product = this.homeProduct.find(el=>el.id===id)
      const cartProduct = this.cart.find(el => el.id === id)
      cartProduct.quantity--;
    },
    removeCart(id) {
      const product = this.homeProduct.find(el => el.id === id)
      this.cart = this.cart.filter((el) => el.id !== id)
      product.cart = 0
    }

  },
})
