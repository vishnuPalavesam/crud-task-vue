<script setup>
  import { useProductStore } from '@/stores/product';
  import { onMounted, ref } from 'vue';
  import ProductCard from '@/components/ProductCard.vue';

  const products = useProductStore();
  const productList = ref([]);

  const homeProducts = async () => {
    await products.getHomeProducts();
    productList.value = products.homeProduct;
    // console.log(productList.value);
  };

  onMounted(() => {
    homeProducts();
  });
</script>

<template>
  <div>
    <ProductCard v-for="product in productList" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
  div {
    display: grid;
    justify-content: center;
    align-content: center;
    place-content: center;
    gap: 0.3rem;
    grid-column: auto;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    max-width: 86vw;
    margin: auto;
  }
</style>
