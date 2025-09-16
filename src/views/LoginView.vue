<script setup>

  import LoginContent from './LoginContent.vue';
  import LoginForm from './LoginForm.vue';

  import RegisterContent from './RegisterContent.vue';
  import RegisterForm from './RegisterForm.vue';

  import { useRoute } from 'vue-router';

  const router = useRoute();

</script>

<template>
  <div v-if="router.path === '/login'" class="grid grid-cols-2 justify-center">
    <LoginContent />
    <LoginForm />
  </div>
  <div v-else class="grid grid-cols-2 justify-items-center place-items-center dark:bg-gray-900">
    <RegisterContent />
    <RegisterForm />
  </div>
</template>
