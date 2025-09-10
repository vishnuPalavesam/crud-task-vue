<script setup>
  import { RouterView } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import MainLayout from './views/layouts/MainLayout.vue'
  import axios from 'axios'

  const auth = ref({
    loading: true,
    loggedIn: false
  })

  const token = localStorage.getItem("auth_token")
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  const checkUser = async () => {
    if (token) {
      try {
        const response = await axios.get("/api/user")
        auth.value.loggedIn = !!response.data.id
        console.log(auth.value.loggedIn);
      } catch (error) {
        console.warn('Token invalid or request failed', error)
        auth.value.loggedIn = false
      } finally {
        auth.value.loading = false
      }
    } else {
      auth.value.loading = false
    }
  }

  onMounted(() => {
    checkUser()
  })
  // watch(
  //   () => auth.value.loggedIn, (newVal) => {
  //     return newVal;
  //   }
  // )
  console.log(auth.value.loggedIn)
</script>

<template>
  <MainLayout :isloggedin="auth.loggedIn">
    <RouterView />
  </MainLayout>
</template>
