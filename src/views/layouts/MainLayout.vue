<script setup>
  import { RouterLink, useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth';
  import AppLogo from '@/components/Logo.vue';

  const auth = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    auth.logout();
    router.push({ name: "login" });
  }
</script>

<template>

  <header class="main-header">
    <!-- <img src="@/assets/logomain.svg" alt="logo" height="125" width="125"> -->
    <AppLogo />
    <div class="nav-wrapper">
      <nav>
        <div class="cart-count"></div>
        <RouterLink v-if="!auth.loggedIn" to="/login">Login</RouterLink>
        <RouterLink v-if="!auth.loggedIn" to="/register">Register</RouterLink>
        <RouterLink v-if="auth.loggedIn" to="/">Home</RouterLink>
        <RouterLink v-if="auth.loggedIn" to="/addproduct">Add Product</RouterLink>
        <RouterLink to="logout" v-if="auth.loggedIn" @click.prevent="handleLogout">Logout</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
  .main-header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
  }

  .nav-wrapper {
    display: grid;
    justify-content: flex-end;
    width: 100%;
  }

  nav {
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
    width: max-content;
  }

  .cart-count {
    background: url('@/assets/cart.svg');
    height: 1.5rem;
    width: 1.5rem;
    
  }
</style>
