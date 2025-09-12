import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    homeProduct: [],
    cart: 0,
    recProducts: [],
  }),
  actions: {
    async getHomeProducts() {
      const response = await axios.get('/api/products/index')
      if (response.status === 200 && response.data) {
        const data = response.data
        data.forEach((el) => {
          return (el.cart = 0)
        })
        this.homeProduct = response.data
      } else {
        this.homeProduct = []
      }
    },
    addToCart(id) {
      const product = this.homeProduct.find((el) => el.id === id)
      if (product.cart === 0) {
        this.cart++
        product.cart = 1
      } else {
        this.cart--
        product.cart = 0
      }
    },
    async getRecProduct() {
      console.log('Here inside')
      if (this.homeProduct.length === 0) {
        await this.getHomeProducts()
        this.recProducts = [...this.homeProduct].sort(() => Math.random() - 0.5).slice(0, 4)
      } else {
        this.recProducts = [...this.homeProduct].sort(() => Math.random() - 0.5).slice(0, 4)
      }
    },
  },
})
