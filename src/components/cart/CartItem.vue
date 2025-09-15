<script setup>
  import { useProductStore } from '@/stores/product';
  import { defineProps } from 'vue';

  const cart = useProductStore();

  defineProps(
    {
      product: {
        type: Object,
      }
    }
  )

  // const emit = defineEmits(
  //   ['remove']
  // );
</script>

<template>
  <div class="cart-item flex items-center gap-6 p-4 bg-gray-100 rounded-lg shadow">
    <img :src="product.image" alt="" class="w-24 h-24 object-cover rounded-lg border">
    <div class="flex-1">
      <h4 class="text-lg font-semibold text-gray-700">{{ product.name }}</h4>
      <p class="text-gray-500">Price: <span class="font-bold text-gray-800">${{ product.price }}</span></p>
      <div class="flex items-center gap-2 mt-2">
        <button class="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
          @click="product.quantity > 1 && cart.decreaseQuantity(product.id)"
          :disabled="product.quantity <= 1">-</button>
        <span class="px-3 py-1 bg-white border rounded text-gray-700">{{ product.quantity }}</span>
        <button class="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
          @click="cart.increaseQuantity(product.id)">+</button>
      </div>
    </div>
    <button @click="cart.removeCart(product.id)" class="bg-red-900 p-1.5 text-white rounded-md">
      Remove</button>
  </div>
</template>

<script>
  export default {
    name: "CartItem"
  }
</script>
