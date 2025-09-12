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
  <div class=" grid grid-cols-[1fr_1fr]">
    <div class="grid-center">
      <h1 class="">Here goes the different content</h1>
      <img src="https://t4.ftcdn.net/jpg/01/35/08/59/360_F_135085967_K8tvXYKca02oD8X0zDkbl3V9N9Sonemy.jpg" alt="">
    </div>
    <div>
      <form class="" @submit.prevent="handleLogin">
        <h1>Login</h1>
        <div class="form-content">
          <label for="email">Email</label>
          <input class="border-1" v-model="form.email" type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div class="form-content">
          <label for="password">Password</label>
          <input class="border-1" v-model="form.password" type="password" name="password" id="password" placeholder="Password" />
        </div>
        <div  class="form-content">
          <button class="p-3 text-center" :disabled="auth.loading" name="submit" id="submit">
            {{ (auth.loading) ? "Attempting Login" : "Login" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .d-grid {
    grid-template-columns: 1fr 1fr;
  }

  .grid-center {
    place-content: center;
    height: 500px;
  }
</style>
