<script lang="ts" setup>
const route = useRoute();

const bodyClass = computed(() => {
  if (route.path === '/map') return 'map-page';
  if (route.meta.layout === 'map') return 'layout-map';
  return '';
});

useHead({
  bodyAttrs: {
    class: bodyClass,
  },
});
</script>

<template>
  <Html lang="ru">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style></style>
