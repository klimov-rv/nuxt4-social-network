<script setup lang="ts">
const slug = '1-roman-klimov';
const { data: user } = await useAsyncData(`user-${slug}`, () => {
  return queryCollection('mock_users').path(`/${slug}`).first();
});

useSeoMeta({
  title: user.value?.title,
});

onMounted(() => {
  ElNotification({
    title: 'Успех',
    message: 'Вы авторизовались',
    type: 'success',
  });
});
</script>

<template>
  <ContentRenderer v-if="user" :value="user" class="user-default" />
  <div v-else>User not found</div>
</template>
<style lang="scss">
.user-default {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;

  // Типографика
  & h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 2rem 0 1.5rem;
    color: #1a1a1a;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;

    &::before {
      content: '';
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
}
</style>
