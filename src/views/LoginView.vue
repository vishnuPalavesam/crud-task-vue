<script setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth';
  const router = useRouter();

  const props = defineProps({
    email: { type: String, default: "" }
  });

  const auth = useAuthStore();

  const emailInput = ref(props.email);

  const form = reactive({
    email: emailInput.value,
    password: ""
  })

  const handleLogin = async () => {

    try {
      await auth.login(form);
      console.log(auth.loggedIn)
      if (auth.loggedIn) {
        router.push({ name: "home" });
      }
    } catch (error) {
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
    <div class="form-content">
      <button :disabled="auth.loading" name="submit" id="submit">{{ (auth.loading) ? "Attempting Login" : "Login"
      }}</button>
    </div>
  </form>
</template>
