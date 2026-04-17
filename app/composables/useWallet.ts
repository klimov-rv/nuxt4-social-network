import type { TonConnectUI, Wallet } from '@tonconnect/ui';
import type { Account } from '@tonconnect/sdk';
import { getTonConnectUI, resetTonConnectUI } from '@/ton-connect';

interface WalletState {
  address: string | null;
  account: Account | null;
  walletInfo: Wallet | null;
  isConnected: boolean;
  isLoading: boolean;
}

export const useWallet = () => {
  const state = useState<WalletState>('wallet-state', () => ({
    address: null,
    account: null,
    walletInfo: null,
    isConnected: false,
    isLoading: false,
  }));

  const tonConnectUI = useState<TonConnectUI | null>(
    'ton-connect-ui',
    () => null,
  );

  // Computed properties
  const shortAddress = computed(() => {
    return state.value.address
      ? `${state.value.address.slice(0, 6)}...${state.value.address.slice(-4)}`
      : '👛 Подключить';
  });

  const isConnected = computed(() => state.value.isConnected);
  const address = computed(() => state.value.address);
  const account = computed(() => state.value.account);
  const walletInfo = computed(() => state.value.walletInfo);
  const isLoading = computed(() => state.value.isLoading);

  // Helper functions
  const getAddressFromAccount = (
    account: Account | null | undefined,
  ): string | null => {
    return account?.address || null;
  };

  const setupEventListeners = (ui: TonConnectUI) => {
    ui.onStatusChange((wallet) => {
      const address = getAddressFromAccount(wallet?.account);
      state.value = {
        address,
        account: wallet?.account || null,
        walletInfo: wallet || null,
        isConnected: !!wallet,
        isLoading: false,
      };
    });

    ui.onModalStateChange((modalState) => {
      if (modalState?.status === 'closed' && !state.value.isConnected) {
        state.value.isLoading = false;
      }
    });
  };

  const initTonConnect = async (): Promise<TonConnectUI | null> => {
    if (process.server || tonConnectUI.value) return tonConnectUI.value;

    try {
      state.value.isLoading = true;
      const ui = await getTonConnectUI();
      setupEventListeners(ui);
      tonConnectUI.value = ui;
      return ui;
    } catch (error) {
      console.error('Init error:', error);
      state.value.isLoading = false;
      return null;
    }
  };

  const connect = async (): Promise<boolean> => {
    try {
      state.value.isLoading = true;
      const ui = await initTonConnect();
      if (!ui) throw new Error('TonConnect not initialized');
      await ui.openModal();
      return true;
    } catch (error) {
      console.error('Connection error:', error);
      state.value.isLoading = false;
      throw error;
    }
  };

  const disconnect = async (): Promise<void> => {
    try {
      if (tonConnectUI.value) {
        await tonConnectUI.value.disconnect();
        resetTonConnectUI();
      }
    } catch (error) {
      console.warn('Disconnect failed:', error);
    } finally {
      resetState();
    }
  };

  // const reconnect = async (): Promise<boolean> => {
  //   try {
  //     const ui = await initTonConnect();
  //     if (!ui) return false;

  //     const wallet = ui.wallet;
  //     if (wallet?.account) {
  //       const address = getAddressFromAccount(wallet.account);
  //       state.value = {
  //         address,
  //         account: wallet.account,
  //         walletInfo: wallet,
  //         isConnected: true,
  //         isLoading: false,
  //       };
  //       return true;
  //     }
  //     return false;
  //   } catch (error) {
  //     console.error('Reconnect failed:', error);
  //     return false;
  //   }
  // };

  const resetState = () => {
    state.value = {
      address: null,
      account: null,
      walletInfo: null,
      isConnected: false,
      isLoading: false,
    };
  };

  const toggleConnection = async (): Promise<void> => {
    state.value.isConnected ? await disconnect() : await connect();
  };

  const sendTransaction = async (transaction: any): Promise<void> => {
    if (!tonConnectUI.value || !state.value.isConnected) {
      throw new Error('Wallet not connected');
    }
    await tonConnectUI.value.sendTransaction(transaction);
  };

  return {
    address: readonly(address),
    shortAddress,
    isConnected,
    isLoading,
    account: readonly(account),
    walletInfo: readonly(walletInfo),
    initTonConnect,
    connect,
    disconnect,
    toggleConnection,
    sendTransaction,
    _tonConnectUI: readonly(tonConnectUI),
  };
};
