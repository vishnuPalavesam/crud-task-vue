<script setup>
  import { defineProps } from 'vue';

  defineProps({
    modelValue: String,
    label: String,
    name: String,
    placeholder: String,
    type: String
  })

  const emit = defineEmits(['update:modelValue']);
  function updateValue(event) {
    emit('update:modelValue', event.target.value)
  }

  // console.log(type);
</script>

<template>
  <!-- <div v-if="type === 'password'" class="form-content relative">
    <label :for="name">{{ label }}</label>
    <input :type="showPassword ? 'text' : 'password'" class="border-1 text-base rounded-md px-1.5 relative" :name="name"
      :id="name" :value="modelValue" @input="updateValue" :placeholder="placeholder" />
    <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-2 text-gray-500 bg-white">
      👁️
    </button>
  </div> -->
  <div v-if="type === 'password'" class="form-content relative">
    <label :for="name">{{ label }}</label>
    <input type="password" class="border-1 text-base rounded-md px-1.5 relative" :name="name" :id="name"
      :value="modelValue" @input="updateValue" :placeholder="placeholder" />
    <!-- <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-2 text-gray-500 bg-white">
      👁️
    </button> -->
  </div>


  <div v-else class="form-content">
    <label :for="name">{{ label }}</label>
    <input v-if="type === 'password'" class="border-1 text-base rounded-md px-1.5" type="password" :name="name"
      :id="name" :value="modelValue" @input="updateValue" :placeholder="placeholder" />
    <input v-else class="border-1 text-base rounded-md px-1.5" type="text" :name="name" :id="name" :value="modelValue"
      @input="updateValue" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    name: "InputText"
  }
</script>
