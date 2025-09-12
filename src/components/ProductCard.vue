<script setup>
  import { useAuthStore } from '@/stores/auth';
  import { useProductStore } from '@/stores/product';
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';
  defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  const auth = useAuthStore();
  const productState = useProductStore();
</script>

<template>
  <div class="product-card">
    <img :src="product.image" alt="">
    <img v-if="product.cart === 1" class="cart-button active" src="@/assets/cart.svg" height="30px" width="30px" alt="">
    <div class="product-details">
      <div class="product-text">
        <h4>{{ product.name }}</h4>
        <h5>{{ "$ " + product.quantity }}</h5>
      </div>
      <RouterLink to="" v-if="auth.loggedIn" @click.prevent="productState.addToCart(product.id)">
        <img class="add-cart" src="@/assets/cart.svg" height="30px" width="30px" alt="">
      </RouterLink>

    </div>
  </div>
</template>

<style lang="css" scoped>
  .product-card {
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    position: relative;
    grid: none;
    max-width: 14rem;
    width: max-content;
    gap: 0.7rem;
    border: solid 0.00001rem var(--color-border);
    padding: 8px;
    border-radius: 1.5%;
  }

  img {
    max-width: 100%;
  }

  .product-details {
    text-indent: 10px;
    text-indent: 10px;
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  .cart-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: rgba(0, 255, 149, 0.24);
    border-radius: 50%;
  }

  .add-cart {
    position: relative;
    right: 6px;
  }

  .add-cart::after {
    content: "+";
  }

  @media (width >=1650px) {
    .product-card {
      max-width: 18rem;
    }
  }

  @media (width >=1450px) {
    .product-card {
      max-width: 16rem;
    }
  }

  @media (width >=1250px) {
    .product-card {
      max-width: 15rem;
    }
  }

  @media (width >=1024px) {
    .product-card {
      max-width: 14rem;
    }
  }
</style>
