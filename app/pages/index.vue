<script setup lang="ts">
definePageMeta({
  layout: 'hero',
});

const router = useRouter();
const loginVal = ref('');
const passVal = ref('');
const loginText = 'Введите логин';
const passText = 'Введите пароль';

const goProfile = () => {
  router.push(`/profile`);
};
</script>
<template>
  <el-form size="large" class="auth-form wide-btns">
    <h2 class="text-center">Войти</h2>
    <el-form-item>
      <ElButton @click="goProfile" style="width: 100%;">
        <el-icon class="el-icon--left"><IconTelegram /></el-icon> Telegram
      </ElButton>
    </el-form-item>
    <el-form-item>
      <ElButton @click="goProfile" style="width: 100%;">
        <el-icon class="el-icon--left"><IconGoogle /></el-icon> Google
      </ElButton>
    </el-form-item>
    <el-divider>или</el-divider>
    <el-form-item>
      <ElInput v-model="loginVal" :placeholder="loginText" />
    </el-form-item>
    <el-form-item>
      <ElInput
        v-model="passVal"
        type="password"
        :placeholder="passText"
        show-password
      />
    </el-form-item>
    <el-form-item>
      <ElButton type="primary" @click="goProfile" style="width: 100%;">
        Продолжить
      </ElButton>
    </el-form-item>
    <ConnectWallet />
  </el-form>
</template>
<style lang="scss">
.auth-form {
  h2.text-center {
    margin-top: 1em;
    margin-bottom: 2em;
  }
  .el-form-item:last-child {
    padding-top: 3em;
  }
}
</style>
