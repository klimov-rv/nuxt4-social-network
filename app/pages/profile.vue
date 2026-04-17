<script setup lang="ts">
import { Location } from '@element-plus/icons-vue';

// В демке считаем, что мы зашли под Романом Климовым
const slug = '1-roman-klimov';
const { data: user } = await useAsyncData(`user-${slug}`, () => {
  return queryCollection('mock_users').path(`/${slug}`).first();
});

useSeoMeta({
  title: user.value?.name || 'Мой профиль',
});
</script>

<template>
  <div class="profile-page">
    <div v-if="user" class="user-default">
      <div class="profile-header">
        <el-avatar :size="100" :src="user.avatar" class="profile-avatar">
          {{ user.name?.charAt(0) }}
        </el-avatar>
        <div class="profile-info">
          <h1 class="profile-name">{{ user.name }}</h1>
          <div class="profile-meta">
            <el-icon><Location /></el-icon> {{ user.location }}
            <span class="profile-rating">⭐ {{ user.rating }}</span>
          </div>
        </div>
      </div>

      <ContentRenderer :value="user" />
    </div>
    <div v-else class="not-found">
      <el-result
        icon="error"
        title="Пользователь не найден"
        sub-title="К сожалению, данные профиля недоступны"
      >
        <template #extra>
          <el-button type="primary" @click="navigateTo('/')">
            На главную
          </el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<style lang="scss">
.profile-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.user-default {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;

  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #f0f0f0;
  }

  .profile-avatar {
    margin-right: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .profile-info {
    flex: 1;
  }

  .profile-name {
    margin: 0;
    border: none;
    padding-bottom: 0;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1a1a1a;
  }

  .profile-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    color: #6b7280;
  }

  .profile-rating {
    margin-left: 1rem;
    color: #eab308;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 2rem 0 1.5rem;
    color: #1a1a1a;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;
  }

  h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}

.not-found {
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
