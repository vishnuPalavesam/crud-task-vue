<script setup>
  defineProps({
    loading: Boolean,
    text: String,
    loadText: String,
    error: Boolean,
    errorText: {
      type: String,
      default: ""
    },
    successText: {
      type: String,
      default: "",
    },
    success: Boolean
  })
</script>
<template>
  <div class="form-content">
    <button :disabled="loading" name="submit" id="submit" class="p-1 border-1 rounded-md">
      {{ (loading) ? loadText : text }}
    </button>
  </div>
  <p class="text-red-400" v-show="error">{{ errorText }}</p>
  <p class="text-success" v-show="success">{{ successText }}</p>
</template>



<style lang="css" scoped>
  .form-content button {
    background-color: hsla(158, 70%, 55%, 0.589);
  }
</style>
