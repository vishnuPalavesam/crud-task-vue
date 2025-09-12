<script setup>
  import { defineProps } from 'vue';

  defineProps({
    product: {
      type: Object,
    }
  }
  )
</script>

<template>

  <div class="cart-item">
    <img :src="product.image" alt="">

  </div>

</template>

<script>
  export default {
    name: "CartItem"
  }
</script>

<style lang="css" scoped>
  .cart-item {
    display: grid;
    border: solid 0.00001rem var(--color-border);
    grid-template-columns: auto;

  }
</style>
