<script setup lang="ts">
import { ElMessage } from 'element-plus';

definePageMeta({
  layout: 'hero',
});

const loginVal = ref('admin');
const passVal = ref('admin');
const loading = ref(false);

const goProfile = async () => {
  loading.value = true;
  try {
    const { data, error } = await useFetch('/api/v1/login', {
      method: 'POST',
      body: {
        login: loginVal.value,
        password: passVal.value,
      },
    });

    if (error.value) {
      ElMessage.error(error.value.statusMessage || 'Ошибка авторизации');
      return;
    }

    if (data.value) {
      ElNotification({
        title: 'Добро пожаловать!',
        message: 'Вы успешно вошли в систему',
        type: 'success',
      });

      await navigateTo('/profile');
    }
  } catch (e) {
    ElMessage.error('Произошла непредвиденная ошибка');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <el-form size="large" class="auth-form wide-btns">
    <h2 class="text-center">Войти</h2>
    <el-form-item>
      <ElButton @click="goProfile" style="width: 100%;" :loading="loading">
        <el-icon class="el-icon--left"><IconTelegram /></el-icon> Telegram
      </ElButton>
    </el-form-item>
    <el-form-item>
      <ElButton @click="goProfile" style="width: 100%;" :loading="loading">
        <el-icon class="el-icon--left"><IconGoogle /></el-icon> Google
      </ElButton>
    </el-form-item>
    <el-divider>или</el-divider>
    <el-form-item>
      <ElInput v-model="loginVal" placeholder="Введите логин" />
    </el-form-item>
    <el-form-item>
      <ElInput
        v-model="passVal"
        type="password"
        placeholder="Введите пароль"
        show-password
      />
    </el-form-item>
    <el-form-item>
      <ElButton
        type="primary"
        @click="goProfile"
        style="width: 100%;"
        :loading="loading"
      >
        Продолжить
      </ElButton>
    </el-form-item>
    <!-- <ConnectWallet /> -->
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
