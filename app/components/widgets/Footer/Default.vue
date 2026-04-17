<script setup lang="ts"></script>
<template>
  <footer class="footer">
    <FooterCopyrights />
    <br />
    <BuildTime />
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  position: absolute;
  bottom: 0;
  width: 100%;
  .build-timestamp {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
