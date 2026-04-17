<script setup lang="ts">
import { Share } from '@element-plus/icons-vue';
const route = useRoute();
const isMyProfile = computed(() => route.name === 'profile');
const isSearch = computed(() => route.name === 'search');

const pageTitle = computed(() =>
  isMyProfile.value
    ? 'Мой профиль'
    : !isSearch.value
    ? 'Профиль пользователя'
    : 'Поиск',
);

const showBackButton = computed(() => !isMyProfile.value);

const goBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="main-app-block default-bg" :class="{ search: isSearch }">
    <HeaderDefault :currentPage="route.name" />
    <main class="container container-card">
      <el-card :class="showBackButton ? `show-back-btn` : `hide-back-btn`">
        <el-page-header @back="goBack">
          <template #content>
            <h2 class="profile-title">{{ pageTitle }}</h2>
          </template>

          <template v-if="!isSearch" #extra>
            <el-button :icon="Share" circle />
          </template>
        </el-page-header>

        <slot />
      </el-card>
    </main>
  </div>
  <FooterDefault />
</template>
<style lang="scss">
.main-app-block {
  &.default-bg {
    background-color: #fbfafa;
    background-image: linear-gradient(-45deg, #fafafa 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #fdfdfd 75%),
      linear-gradient(-45deg, transparent 75%, #fefefe 75%);
    background-size: 5px 5px;
  }
}

.container-card {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  .profile-title {
    font-size: 20px;
    font-weight: 400;
  }
  > .el-card {
    // height: 100vh;
    // display: flex;
    > .el-card__body {
      position: relative;
    }
  }
  .el-page-header__back .el-page-header__title {
    display: none;
  }
  .el-page-header__icon {
    margin: 0;
  }
  .hide-back-btn {
    .el-page-header__left,
    .el-page-header__content {
      text-align: center;
      width: 100%;
      margin: 0;
    }
    .el-page-header__extra {
      position: absolute;
      top: 16px;
      right: 16px;
    }
    .el-page-header__back {
      display: none;
      & + .el-divider {
        display: none;
      }
    }
  }
}
</style>
