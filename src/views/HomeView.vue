<script setup>
  import { useProductStore } from '@/stores/product';
  import { onMounted, ref } from 'vue';
  import ProductCard from '@/components/ProductCard.vue';

  const products = useProductStore();
  const productList = ref([]);

  const homeProducts = async () => {
    productList.value = await products.getHomeProducts();
    console.log(productList.value);
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
    gap: 1rem;
  }

  div {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (width <=1450px) {
    div {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (width <=840px) {
    div {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (width <=520px) {
    div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (width <=425px) {
    div {
      grid-template-columns: 1fr;
    }
  }
</style>
