<script setup lang="ts">
import { Search, Location } from '@element-plus/icons-vue';

const input_value = ref('');
const loading = ref(false);

// Получаем всех пользователей из коллекции mock_users
const { data: users } = await useAsyncData('all-users', () =>
  queryCollection('mock_users').all(),
);

// Фильтруем пользователей на основе введенного значения
const filteredUsers = computed(() => {
  const query = input_value.value.toLowerCase().trim();
  if (!query) return [];

  return (
    users.value?.filter((user) => user.name?.toLowerCase().includes(query)) ||
    []
  );
});

const handleSelect = (path: string) => {
  navigateTo(`/user${path}`);
};
</script>

<template>
  <div class="search-page">
    <div class="flex flex-wrap mb-6">
      <el-input
        v-model="input_value"
        style="max-width: 600px;"
        placeholder="Поиск по имени или фамилии..."
        class="input-with-select"
        clearable
      >
        <template #prepend>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>

    <div v-if="input_value" class="search-results">
      <h3 class="mb-4">Результаты поиска:</h3>

      <el-empty
        v-if="filteredUsers.length === 0"
        description="Пользователи не найдены"
      />

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <el-card
          v-for="user in filteredUsers"
          :key="user.id"
          class="user-card cursor-pointer hover:shadow-lg transition-shadow"
          @click="handleSelect(user.path)"
        >
          <div class="flex items-center">
            <el-avatar :size="50" :src="user.avatar" class="mr-4">
              {{ user.name?.charAt(0) }}
            </el-avatar>
            <div>
              <div class="font-bold text-lg">{{ user.name }}</div>
              <div class="text-gray-500 text-sm">
                <el-icon><Location /></el-icon> {{ user.location }}
              </div>
              <div class="text-yellow-500 text-sm">⭐ {{ user.rating }}</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>

    <div v-else class="search-placeholder">
      <el-text type="info">Введите имя пользователя для начала поиска</el-text>
    </div>
  </div>
</template>

<style scoped>
.search-page {
  padding: 20px;
}
.user-card {
  margin-bottom: 10px;
}
</style>
