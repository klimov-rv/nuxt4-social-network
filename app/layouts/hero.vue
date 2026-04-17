<script setup lang="ts"></script>
<template>
  <div class="main-app-block hero">
    <HeaderHero />

    <main class="container">
      <el-card>
        <slot />
      </el-card>
    </main>

    <el-footer>
      <FooterCopyrights /> <br />
      <BuildTime />
    </el-footer>
  </div>
</template>

<style lang="scss">
.main-app-block.hero {
  overflow: hidden;
  .container > .el-card {
    min-width: 430px;

    @media screen and (max-width: 768px) {
      min-width: 350px;
    }
  }
}
</style>
