<script setup>
  import { reactive, ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const props = defineProps({
    email: { type: String, default: "" }
  });

  const emailInput = ref(props.email);
  const loading = ref(false);

  const form = reactive({
    email: emailInput.value,
    password: ""
  })

  const handleLogin = async () => {
    loading.value = true;

    try {
      const response = await axios.post("/api/login", form, {
        headers: { "Content-Type": "application/json" },
      })
      console.log(response);
      if (response.status == 200 && response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
        router.push({ name: "home" })
      }
    } catch (error) {
      loading.value = false;
      error.value = true;
    }

  }
</script>

<template>
  <form @submit.prevent="handleLogin">
    <h1>Login</h1>
    <div class="form-content">
      <label for="email">Email</label>
      <input v-model="form.email" type="text" name="email" id="email" placeholder="Email" />
    </div>
    <div class="form-content">
      <label for="password">Password</label>
      <input v-model="form.password" type="password" name="password" id="password" placeholder="Password" />
    </div>
    <div v-if="error">Something went wrong</div>
    <div class="form-content">
      <button :disabled="loading" name="submit" id="submit">{{ (loading) ? "Attempting Login" : "Login" }}</button>
    </div>
  </form>
</template>
