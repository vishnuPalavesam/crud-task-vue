<script setup>
  import CartItem from '@/components/cart/CartItem.vue';
  import NoCart from '@/components/cart/NoCart.vue';
  import { useProductStore } from '@/stores/product';
  const cart = useProductStore();
  const cartProduct = cart.homeProduct.filter((el) => el.cart)

</script>

<template>
  <NoCart v-if="cart.cart == 0" />
  <CartItem v-else v-for="product in cartProduct" :key="product.id" :product="product" />
</template>

<script>
  export default {
    name: 'CartView'
  }
</script>

<style lang="css" scoped></style>
