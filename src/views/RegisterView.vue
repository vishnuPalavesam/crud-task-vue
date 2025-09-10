<script setup>

  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const form = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const loading = ref(false);
  const error = ref(false);
  const success = ref(false);

  async function handleRegister() {
    loading.value = ref(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(response);
      if (response.status == 201) {
        success.value = ref(true);
        setTimeout(() => {
          router.push({ name: "login" });
        }, 2000);
      }
    } catch (error) {
      error.value = true;
    }
  }

</script>
<template>
  <form @submit.prevent="handleRegister" autocomplete="off">
    <h1>Register</h1>
    <div class="form-content">
      <label for="email">Name</label>
      <input type="text" v-model="form.name" name="name" id="name" placeholder="Name" />
    </div>
    <div class="form-content">
      <label for="email">Email</label>
      <input type="text" v-model="form.email" name="email" id="email" placeholder="Email" />
    </div>
    <div class="form-content">
      <label for="password">Password</label>
      <input type="password" v-model="form.password" name="password" id="password" placeholder="Password" />
    </div>
    <div class="form-content">
      <label for="password">Confirm Password</label>
      <input type="password" v-model="form.password_confirmation" name="password_confirmation"
        id="password_confirmation" placeholder="Confirm Password" />
    </div>
    <div class="form-content">
      <button name="submit" id="submit" :disabled="loading">{{ loading ? "Registering" : "Register" }}</button>
    </div>
    <div class="text-red" v-if="error">Something went wrong</div>
    <div class="text-success" v-if="success">Account created successfully</div>
  </form>
</template>