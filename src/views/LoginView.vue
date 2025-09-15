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
  <div class="grid grid-cols-2 justify-center">
    <div class="self-center object-center place-content-center grid text-center justify-items-center py-5 gap-5 ">
      <h1>Crud Task</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam dolorum corporis. Vitae voluptatum
        ducimus accusantium quia veritatis rerum iste mollitia. Magni corporis ipsa rem recusandae, totam facilis modi
        ipsum?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed eveniet earum et cumque? Maxime debitis
        illum odio, facere dignissimos nulla enim quo voluptatibus porro, eos rem, ullam ducimus magni.</p>
      <img class="m-auto" src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="">
    </div>

    <div>
      <form @submit.prevent="handleLogin">
        <h1>Login</h1>
        <div class="form-content">
          <label for="email">Email</label>
          <input class="border-1 text-base rounded-md px-1.5" v-model="form.email" type="text" name="email" id="email"
            placeholder="Email" />
        </div>
        <div class="form-content">
          <label for="password">Password</label>
          <input class="border-1 text-base rounded-md px-1.5" v-model="form.password" type="password" name="password"
            id="password" placeholder="Password" />
        </div>
        <div class="form-content">
          <button :disabled="auth.loading" name="submit" id="submit" class="p-1 border-blue-100">
            {{ (auth.loading) ? "Attempting Login" : "Login" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
  /* .d-grid {
    grid-template-columns: 1fr 1fr;
  }

  .grid-center {
    place-content: center;
    height: 500px;
  } */
</style>
