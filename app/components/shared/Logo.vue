<script setup lang="ts">
import LogoImg from '@/assets/img/logo-simple.jpg';
</script>
<template>
  <img :src="LogoImg" alt="Logo" class="default-logo" />
</template>
<style lang="scss">
.default-logo {
  max-height: 100%;
  width: auto;
}
</style>
