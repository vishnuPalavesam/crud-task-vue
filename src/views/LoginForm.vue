<script setup>
  import { reactive } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import InputText from '@/components/InputText.vue';
  import FormButton from '@/components/FormButton.vue';

  const props = defineProps({
    email: { type: String, default: "" }
  });

  const router = useRouter();
  const emailInput = ref(props.email);

  const form = reactive({
    email: emailInput.value,
    password: ""
  })

  const auth = useAuthStore();
  const error = ref(false);

  const handleLogin = async () => {
    try {
      await auth.login(form);
      if (auth.loggedIn) {
        router.push({ name: "home" });
      } else {
        error.value = true;
      }
    } catch (err) {
      console.log(err);
      error.value = true;
    }
  }

</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <h1>Login</h1>
      <InputText name="email" label="Email" v-model="form.email" placeholder="Email" />
      <InputText type="password" name="password" label="Password" v-model="form.password" placeholder="Password" />
      <FormButton text="Login" loadText="Attempting Login" :loading="auth.loading" :error="error"
        errorText="Authentication failled" />
      <!-- <div class="form-content">
        <button :disabled="auth.loading" name="submit" id="submit" class="p-1 border-1 rounded-md">
          {{ (auth.loading) ? "Attempting Login" : "Login" }}
        </button>
      </div> -->

    </form>
  </div>
</template>

<script>
  export default {
    name: "LoginForm"
  }
</script>
