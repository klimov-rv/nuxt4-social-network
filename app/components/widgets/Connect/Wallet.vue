<!-- components/WalletButton.vue -->
<script setup lang="ts">
const { shortAddress, isLoading, toggleConnection } = useWallet();
</script>

<template>
  <button
    class="wallet-button"
    :class="{ 'wallet-button--loading': isLoading }"
    :disabled="isLoading"
    aria-label="Подключить кошелек"
    @click="toggleConnection"
  >
    <span class="wallet-button__content">
      <span v-if="isLoading" class="wallet-button__loader" aria-hidden="true" />
      <span v-else class="wallet-button__text">
        {{ shortAddress }}
      </span>
    </span>
  </button>
</template>

<style scoped lang="scss">
.wallet-button {
  --gradient-start: #8b5cf6;
  --gradient-end: #ec4899;
  --padding-x: 1.5rem;
  --padding-y: 0.5rem;
  --border-radius: 50px;
  --transition-duration: 0.2s;

  background: linear-gradient(
    135deg,
    var(--gradient-start) 0%,
    var(--gradient-end) 100%
  );
  padding: var(--padding-y) var(--padding-x);
  border-radius: var(--border-radius);
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.1em;
  position: absolute;
  top: 2rem;
  right: 2rem;
  min-width: 160px;
  min-height: 2rem;
  transition: all var(--transition-duration) ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &--loading {
    // position: relative;
    color: transparent;

    &:hover {
      transform: none;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__text {
    font-size: inherit;
    font-weight: inherit;
  }

  &__loader {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .wallet-button {
    position: relative;
    top: auto;
    right: auto;
    margin: 1rem auto;
    display: block;
    width: 100%;
    max-width: 200px;
  }
}
</style>
