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

  <div class="grid grid-cols-2 justify-items-center place-items-center dark:bg-gray-900">
    <div class="grid text-center py-5">
      <img class="py-5" src="https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg" alt="">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur modi corporis sint. Mollitia alias,
        perferendis quas ipsa rem ab a dicta assumenda nostrum distinctio! Asperiores, fuga. Nemo, nobis id!</h1>
    </div>
    <form @submit.prevent="handleRegister" autocomplete="off">
      <h1>Register</h1>
      <div class="form-content">
        <label for="email">Name</label>
        <input class="border-1 rounded-md text-base px-1.5" type="text" v-model="form.name" name="name" id="name"
          placeholder="Name" />
      </div>
      <div class="form-content">
        <label for="email">Email</label>
        <input class="border-1 rounded-md text-base px-1.5" type="text" v-model="form.email" name="email" id="email"
          placeholder="Email" />
      </div>
      <div class="form-content">
        <label for="password">Password</label>
        <input class="border-1 rounded-md text-base px-1.5" type="password" v-model="form.password" name="password"
          id="password" placeholder="Password" />
      </div>
      <div class="form-content">
        <label for="password">Confirm Password</label>
        <input class="border-1 rounded-md text-base px-1.5" type="password" v-model="form.password_confirmation"
          name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" />
      </div>
      <div class="form-content">
        <button class="border-1 p-1" name="submit" id="submit" :disabled="loading">{{ loading ? "Registering" :
          "Register" }}</button>
      </div>
      <div class="text-red" v-if="error">Something went wrong</div>
      <div class="text-success" v-if="success">Account created successfully</div>
    </form>
  </div>

</template>
