<script setup lang="ts"></script>

<template>
  <el-row class="custom-search-grid flex flex-wrap gap-4" :gutter="30">
  </el-row>
</template>

<style lang="scss">
.custom-search-grid {
  .el-col {
    margin-bottom: 30px;
  }
  .user-card {
    border-radius: 15px;
    box-shadow: none;
    padding: 13px 15px;
    .item {
      &-icon {
        font-size: 42px;
        display: block;
        margin-bottom: 15px;
      }
      &-title {
        font-size: 30px;
      }
      &-description {
        font-size: 20px;
        width: 81%;
        min-height: 2.5em;

        @media (max-width: 480px) {
          width: 95%;
        }
      }
    }
  }
}
</style>
