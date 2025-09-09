<script setup>
import MainLayout from './layouts/MainLayout.vue'
</script>
<template>
  <MainLayout>
    <form action="">
      <h1>Register</h1>
      <div class="form-content">
        <label for="email">Name</label>
        <input type="text" name="name" id="name"  placeholder="Name"  />
      </div>
      <div class="form-content">
        <label for="email">Email</label>
        <input type="text" name="email" id="email"  placeholder="Email"  />
      </div>
      <div class="form-content">
        <label for="password">Password</label>
        <input type="password" name="password" id="password"  placeholder="Password"  />
      </div>
      <div class="form-content">
        <label for="password">Confirm Password</label>
        <input type="password" name="confirm_password" id="password"  placeholder="Confirm Password"  />
      </div>
      <div class="form-content">
        <button name="submit" id="submit">Register</button>
      </div>
    </form>
  </MainLayout>
</template>

