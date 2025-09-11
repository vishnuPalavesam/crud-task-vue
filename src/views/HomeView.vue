<script setup>
import axios from 'axios';

const token = localStorage.getItem("auth_token")
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const products = async () => {
  const response = axios.get('/api/index');


  console.log(response.data);


}
console.log(products);
</script>
<template>
  <div>

  </div>
</template>

<style scoped>
div {
  display: grid;
  justify-content: center;
  align-content: center;
  place-content: center;
  height: 80dvh;
}
</style>
