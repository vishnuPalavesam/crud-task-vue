import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    homeProduct: [],
    cart: [],
  }),
  actions: {
    async getHomeProducts() {
      const response = await axios.get('/api/products/index')
      if (response.status === 200 && response.data) {
        return response.data
      } else {
        return []
      }
    },
  },
})
