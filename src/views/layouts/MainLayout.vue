<script setup>
  import { RouterLink, useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth';
  import AppLogo from '@/components/Logo.vue';
  import { useProductStore } from '@/stores/product';

  const auth = useAuthStore();
  const router = useRouter();

  const product = useProductStore();

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
        <RouterLink to="cart" v-if="auth.loggedIn">
          <div class="cart-count">{{ product.cart > 0 ? product.cart : '' }}</div>
        </RouterLink>
        <RouterLink v-if="!auth.loggedIn" to="/login">Login</RouterLink>
        <RouterLink v-if="!auth.loggedIn" to="/register">Register</RouterLink>
        <RouterLink v-if="auth.loggedIn" to="/">Home</RouterLink>
        <!-- <RouterLink v-if="auth.loggedIn" to="/addproduct">Add Product</RouterLink> -->
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

  main {
    max-width: 90%;
    margin-bottom: 2.7rem;
  }

  .cart-count {
    padding-left: 2rem;
    background-repeat: no-repeat;
    font-size: x-small;
    place-content: end;
  }
</style>
