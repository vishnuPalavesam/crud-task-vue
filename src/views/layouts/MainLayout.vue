<script setup>
  import { RouterLink, useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth';
  import AppLogo from '@/components/Logo.vue';
  import { useProductStore } from '@/stores/product';
  import { ref } from 'vue';

  const auth = useAuthStore();
  const router = useRouter();

  const product = useProductStore();

  const handleLogout = () => {
    auth.logout();
    router.push({ name: "login" });
  }


  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<template>

  <header class="main-header">
    <AppLogo />
    <div class="nav-wrapper">
      <nav>
        <button @click="toggleTheme" class="transition duration-500 ease-in-out">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m8.66-9H21m-18 0h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707M17.657 6.343l.707-.707M6.343 17.657l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        </button>
        <RouterLink to="cart" v-if="auth.loggedIn">
          <div class="cart-count">{{ product.cart.length > 0 ? product.cart.length : '' }}</div>
        </RouterLink>
        <RouterLink v-if="!auth.loggedIn" to="/login">Login</RouterLink>
        <RouterLink v-if="!auth.loggedIn" to="/register">Register</RouterLink>
        <RouterLink v-if="auth.loggedIn" to="/">Home</RouterLink>
        <RouterLink to="logout" v-if="auth.loggedIn" @click.prevent="handleLogout">Logout</RouterLink>
      </nav>
    </div>
  </header>
  <main class="w-full">
    <slot></slot>
  </main>
</template>

<style scoped>
  button {
    border: none;
    background-color: unset;
  }

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
