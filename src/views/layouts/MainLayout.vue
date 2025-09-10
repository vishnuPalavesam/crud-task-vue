<script setup>
  import { RouterLink } from 'vue-router'
  // import Logo from '@/components/Logo.vue';
  defineProps({
    isloggedin: {
      type: Boolean,
      required: true
    }
  })
</script>
<script>
  export default {
    name: 'MainLayout',
    components: {
      RouterLink,
    },
  }
</script>
<template>
  <header>
    <!-- <Logo /> -->
    <nav>
      <RouterLink v-if="!isloggedin" to="/login">Login</RouterLink>
      <RouterLink v-if="!isloggedin" to="/register">Register</RouterLink>
      <RouterLink v-if="isloggedin" to="/">Home</RouterLink>
      <RouterLink v-if="isloggedin" to="/addproduct">AddProduct</RouterLink>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>
