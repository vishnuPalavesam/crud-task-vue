<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'MainLayout',
  components: {
    RouterLink,
  },
}
</script>
<template>
  <header>
    <nav>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>
