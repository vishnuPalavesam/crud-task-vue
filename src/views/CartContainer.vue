<script setup>
  import CartItem from '@/components/cart/CartItem.vue';
  import { useProductStore } from '@/stores/product';
  const cart = useProductStore();
  let cartProduct = cart.cart

  function removeCart(id) {
    cartProduct = cartProduct.filter((el) => el.id !== id)
  }
</script>

<template>
  <div id="cart" class="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 rounded-lg shadow-lg">
    <div id="cart-container" class="flex-1 bg-white rounded-lg p-6 shadow">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Products added in cart</h2>
      <div v-if="cartProduct.length" class="space-y-6">
        <CartItem v-for="product in cartProduct" :key="product.id" :product="product" @remove-cart="removeCart" />
      </div>
      <div v-else class="text-gray-500 text-center py-12">
        Your cart is empty.
      </div>
    </div>
    <div class="cart-total bg-white rounded-lg p-6 shadow w-full md:w-1/3 flex flex-col justify-center items-center">
      <h3 class="text-xl font-bold mb-4 text-gray-800">Total Price</h3>
      <p class="text-2xl font-semibold text-green-600">
        ${{cartProduct.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartContainer"
  }
</script>


<style>
  /* #cart-container {
    display: grid;
    gap: 1rem;
  }

  #cart {
    display: grid;
    width: 85vw;
    gap: 1.9rem;
    grid-auto-flow: column;
  } */
</style>
