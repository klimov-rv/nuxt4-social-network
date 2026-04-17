<script setup lang="ts">
import { Search, User } from '@element-plus/icons-vue';
const route = useRoute();
const router = useRouter();

const activeIndex = computed(() => {
  switch (route.name) {
    case 'profile':
      return '2';
    case 'search':
      return '1';
    default:
      return '0';
  }
});

const handleSelect = (newIndex) => {
  switch (newIndex) {
    case '2':
      router.push('/profile');
      break;
    case '1':
      router.push('/search');
      break;
    case '0':
      router.push('/');
      break;
  }
};
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    @select="handleSelect"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <Logo />
    </el-menu-item>
    <div style="flex-grow: 1;" />
    <el-menu-item index="1">
      <el-icon><Search /></el-icon>
      Поиск
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><User /></el-icon>
      Профиль
    </el-menu-item>
  </el-menu>
</template>
