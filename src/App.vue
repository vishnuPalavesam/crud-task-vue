<script setup>
  import { RouterView } from 'vue-router'
  import MainLayout from './views/layouts/MainLayout.vue'
  import { useAuthStore } from './stores/auth'

  const auth = useAuthStore();
  auth.checkUser();
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>
