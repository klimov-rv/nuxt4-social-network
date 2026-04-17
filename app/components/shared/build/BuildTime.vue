<script setup lang="ts">
declare const __BUILD_TIME__: string | undefined;

const buildTime = __BUILD_TIME__ || 'date err';
</script>

<template>
  <span class="build-timestamp" aria-hidden="true">
    build: {{ buildTime }}
  </span>
</template>

<style lang="scss">
.build-timestamp {
  display: flex;
  opacity: 0.5;
  color: white;
}
</style>
