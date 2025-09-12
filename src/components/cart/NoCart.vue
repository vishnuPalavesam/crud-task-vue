<script setup>
  import { useProductStore } from '@/stores/product';
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import ProductCard from '../ProductCard.vue';
  const cart = useProductStore();

  const recProducts = ref([]);
  onMounted(async () => {
    await cart.getRecProduct();
    recProducts.value = cart.recProducts;
    // async function() {
    //   recProducts.value = cart.recProducts;
    // }
  })
</script>
<template>
  <div class="wrapper-nocart">
    <div class="nocart-text">No Items in the Cart.
      Go to
      <RouterLink to="/"> Home </RouterLink>
    </div>
    <div class="wrapper-recent">
      <h4>Recent Products</h4>
      <div class="grid-items">
        <ProductCard v-for="product in recProducts" :key="product.id" :product="product" />
      </div>
    </div>

  </div>
</template>

<script>
  export default { name: "NoCart" }
</script>
<style lang="css" scoped>
  .grid-items {
    display: grid;
    grid-auto-flow: column;
    gap: 0.3rem;
  }

  .nocart-text {
    border: solid 0.00001rem var(--color-border);
    padding: 5rem 0;
  }

  .wrapper-nocart {
    display: grid;
    place-content: center;
    margin: auto;
    gap: 10rem;
  }

  .nocart-text {
    text-align: center;
  }

  .wrapper-recent {
    gap: 1rem;
  }
</style>
