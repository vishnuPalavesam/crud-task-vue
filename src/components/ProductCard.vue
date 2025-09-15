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
  <div
    class="product-card bg-white dark:bg-grey rounded-lg shadow-md p-4 relative flex flex-col items-center transition hover:shadow-lg">
    <img :src="product.image" alt=""
      class="w-full h-40 object-cover rounded-md mb-3 transition-transform hover:scale-105">
    <img v-if="product.cart === 1"
      class="cart-button active absolute top-4 right-4 bg-green-100 rounded-full p-2 shadow" src="@/assets/cart.svg"
      height="30px" width="30px" alt="">
    <div class="product-details w-full grid grid-cols-4 gap-2 items-center">
      <div class="product-text col-span-3">
        <h4 class="text-lg font-semibold text-gray-800 truncate">{{ product.name }}</h4>
        <h5 class="text-sm text-gray-500 mt-1">{{ "$ " + product.quantity }}</h5>
      </div>
      <RouterLink to="" v-if="auth.loggedIn" @click.prevent="productState.addToCart(product.id)"
        class="flex justify-end">
        <img class="add-cart cursor-pointer bg-green-50 hover:bg-green-200 rounded-full p-2 transition"
          src="@/assets/cart.svg" height="30px" width="30px" alt="">
      </RouterLink>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .product-card {
    display: grid;
    position: relative;
    grid: none;
    max-width: 14rem;
    width: max-content;
    border: solid 0.00001rem var(--color-border);
    padding: 8px;
    border-radius: 1.5%;

  }

  .product-card>img:hover {
    box-shadow: 1px 2px;

  }

  img {
    max-width: 100%;

  }

  .product-details {
    text-indent: 10px;
    text-indent: 10px;
    display: grid;
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
