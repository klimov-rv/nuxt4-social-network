<script setup lang="ts"></script>

<template>
  <div class="header-main">
    <h1 class="header-main__title text-center">
      <NuxtLink to="/"> <Logo /> </NuxtLink>
    </h1>
  </div>
</template>
<style lang="scss">
.header-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
  &__title {
    font-size: 38px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 42px;
    }
  }

  @media screen and (max-width: 480px) {
    &__title {
      font-size: 32px;
    }
  }
}
</style>
