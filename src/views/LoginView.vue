<script setup>
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <form action="">
      <h1>Login</h1>
      <div class="form-content">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div class="form-content">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div class="form-content">
        <button name="submit" id="submit">Login</button>
      </div>
    </form>
  </MainLayout>
</template>
