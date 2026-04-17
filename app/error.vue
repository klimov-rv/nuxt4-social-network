<script lang="ts" setup>
import type { NuxtError } from '#app';

interface ErrorProps {
  error: NuxtError | null;
}

const props = defineProps<ErrorProps>();

const {
  statusCode = 500,
  statusMessage = 'Internal Server Error',
  message = 'An unexpected error occurred',
} = props.error || {};

const errorDescriptions: Record<number, string> = {
  404: 'The page you are looking for could not be found.',
  500: 'An internal server error occurred.',
  503: 'The service is temporarily unavailable.',
};

const description = errorDescriptions[statusCode] || message;
const isDev = process.env.NODE_ENV === 'development';
</script>

<template>
  <div class="error-container">
    <!-- Детали ошибки (только в режиме разработки) -->
    <el-alert
      v-if="isDev"
      type="error"
      :title="statusMessage"
      :description="props.error?.stack"
      show-icon
    />

    <h1 class="error-code">{{ statusCode }}</h1>
    <h2 class="error-title">{{ statusMessage }}</h2>
    <p class="error-description">{{ description }}</p>

    <div class="error-actions">
      <NuxtLink to="/" class="error-button primary">Back to Home</NuxtLink>
      <button class="error-button secondary" @click="$router.back()">
        Go Back
      </button>
    </div>
  </div>
</template>

<style>
.error-container {
  padding: 60px 20px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-code {
  font-size: 72px;
  font-weight: bold;
  margin: 0 0 20px;
  color: #e74c3c;
}

.error-title {
  font-size: 28px;
  margin: 0 0 12px;
  color: #2c3e50;
}

.error-description {
  font-size: 16px;
  color: #7f8c8d;
  margin: 0 0 30px;
  max-width: 500px;
}

.error-details {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 30px;
  text-align: left;
  max-width: 600px;
  font-family: monospace;
  font-size: 12px;
  color: #c0392b;
}

.error-details p {
  margin: 5px 0;
}

.error-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.error-button {
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.error-button.primary {
  background: #3498db;
  color: white;
  text-decoration: none;
}

.error-button.secondary {
  background: #95a5a6;
  color: white;
  border: none;
}
</style>
