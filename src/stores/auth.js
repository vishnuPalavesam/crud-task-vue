import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    loading: true,
    user: null,
    error: ""
  }),
  actions: {
    async checkUser() {
      const token = localStorage.getItem('auth_token') // ✅ fixed key
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
          const response = await axios.get('/api/user')
          this.loggedIn = !!response.data.id
          this.user = response.data
        } catch (error) {
          if (error.status === 401) localStorage.removeItem('auth_token')
          this.loggedIn = false
          this.user = null
        } finally {
          this.loading = false
        }
      } else {
        this.loading = false
        this.loggedIn = false
        this.user = null
      }
    },
    async login(form) {
      this.loading = true
      try {
        const response = await axios.post('/api/login', form, {
          headers: { 'Content-Type': 'application/json' },
        })
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('auth_token', response.data.token) // ✅ consistent
          await this.checkUser()
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false
      }
    },
    logout() {
      localStorage.removeItem('auth_token')
      this.loggedIn = false
      this.user = null
      delete axios.defaults.headers.common['Authorization']
    },
  },
})
