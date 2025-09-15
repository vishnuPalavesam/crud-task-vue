<script setup>
  import NoCart from '@/components/cart/NoCart.vue';
  import { useProductStore } from '@/stores/product';
  import CartContainer from './CartContainer.vue';
  const cart = useProductStore();


</script>

<template>
  <NoCart v-if="cart.cart.length === 0" />
  <CartContainer v-else />
</template>

<script>
  export default {
    name: 'CartView'
  }
</script>

<style lang="css" scoped></style>
