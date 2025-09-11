<script setup>
    import { RouterLink } from 'vue-router';
</script>

<script>
    export default {
        name: 'AppLogo'
    }
</script>

<template>
    <RouterLink to="/">
        <img src="@/assets/logomain.svg" alt="logo" height="70" width="70">
    </RouterLink>
</template>

<style lang="css" scoped>
    a {
        display: grid;
        place-content: center;
    }
</style>