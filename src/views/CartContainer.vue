<script setup>

  import CartItem from '@/components/cart/CartItem.vue';
  import { useProductStore } from '@/stores/product';
  const cart = useProductStore();

  // const handleRemove = (id) => { console.log(id); cart.removeCart(id) }

</script>

<template>
  <div id="cart" class="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 rounded-lg shadow-lg">
    <div id="cart-container" class="flex-1 bg-white rounded-lg p-6 shadow">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Products added in cart</h2>
      <div class="space-y-6">
        <CartItem v-for="product in cart.cart" :key="product.id" :product="product" />
      </div>
    </div>
    <div class="cart-total bg-white rounded-lg p-6 shadow w-full md:w-1/3 flex flex-col justify-center items-center">
      <h3 class="text-xl font-bold mb-4 text-gray-800">Total Price</h3>
      <p class="text-2xl font-semibold text-green-600">
        ${{cart.cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}}
      </p>
    </div>
  </div>
</template>


<style></style>
