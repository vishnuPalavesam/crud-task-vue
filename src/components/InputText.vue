<script setup>
  import { defineProps, ref } from 'vue';

  defineProps({
    modelValue: String,
    label: String,
    name: String,
    placeholder: String,
    type: { type: String, default: "text" }
  })

  const emit = defineEmits(['update:modelValue']);
  function updateValue(event) {
    emit('update:modelValue', event.target.value)
  }
  const formError = ref('');
  const showPassword = ref(false);
  function onBlur(field, event) {
    if (!event.target.value.trim()) {
      field = field.replace('_', ' ');
      console.log(field);
      formError.value = field.charAt(0).toUpperCase() + field.slice(1) + " Cannot be empty";
    }

  }

</script>

<template>

  <!-- password fields -->
  <div v-if="type === 'password'" class="form-content relative">
    <label :for="name">{{ label }}</label>
    <input :type="showPassword ? 'text' : 'password'" class="border-1 text-base rounded-md px-1.5 relative" :name="name"
      :id="name" :value="modelValue" @blur="onBlur(name, $event)" @input="updateValue" :placeholder="placeholder" />
    <!-- <button type="button" @click="showPassword = !showPassword"
      class="absolute right-3 top-2 text-gray-500 bg-white hover:bg-gray-400"> -->
    <button type="button" @click="showPassword = !showPassword"
      class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden dark:text-neutral-600 dark:focus:text-blue-500">
      <svg v-if="showPassword" class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
        <path class="hs-password-active:hidden"
          d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
        <path class="hs-password-active:hidden"
          d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
        <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
        <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
      </svg>
      <svg v-else class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </button>
    <!-- </button> -->
    <small class="text-red-500" v-if="formError.length">{{ formError }}</small>
  </div>

  <!-- other fields -->
  <div v-else class="form-content">
    <label :for="name">{{ label }}</label>
    <input class="border-1 text-base rounded-md px-1.5" :type="type" :name="name" :id="name" :value="modelValue"
      @input="updateValue" :placeholder="placeholder" @blur="onBlur(name, $event)" />
    <small class="text-red-500" v-if="formError.length">{{ formError }}</small>
  </div>

</template>



<style lang="css" scoped>
  button {
    background-color: white;
    padding: 0;
    margin: 0;
  }

  .form-content button {
    height: 1.5rem;
    width: 2rem;
    /* background-size: contain; */
    top: 30px;
    width: min-content;
    right: 10px;
  }

  /* input[type="password"]+button {
    background-image: url('/src/assets/showpassword.png');
  }

  input[type="text"]+button {
    background-image: url('/src/assets/hidepassword.png');
  } */
</style>
