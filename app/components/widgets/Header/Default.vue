<script setup lang="ts">
const activeIndex = ref('1');
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <Logo style="width: 100px;" />
    </el-menu-item>
    <div style="flex-grow: 1;" />
    <el-menu-item index="1"> Поиск </el-menu-item>
    <el-sub-menu index="2">
      <template #title> Профиль </template>
      <el-menu-item index="2-1"> item one </el-menu-item>
      <el-menu-item index="2-2"> item two </el-menu-item>
      <el-menu-item index="2-3"> item three </el-menu-item>
      <!-- When the menu has multiple pop-up windows, need `teleported` flag -->
      <el-sub-menu index="2-4" teleported>
        <template #title> item four </template>
        <el-menu-item index="2-4-1"> item one </el-menu-item>
        <el-menu-item index="2-4-2"> item two </el-menu-item>
        <el-menu-item index="2-4-3"> item three </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss">
.el-menu-demo {
  .backlink {
    height: 100%;
    padding: 8px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>
