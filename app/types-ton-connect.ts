export interface WalletAccount {
  address: string;
  chain?: string;
  publicKey?: string;
}

export interface WalletConnection {
  account?: WalletAccount;
  wallet?: { account: WalletAccount };
  state?: { account: WalletAccount };
  walletInfo?: {
    address?: string;
    wallet?: { address: string };
  };
  connector?: {
    _wallet?: {
      address?: string;
      account?: WalletAccount;
    };
  };
  modal?: {
    connector?: {
      _wallet?: {
        address?: string;
        account?: WalletAccount;
      };
    };
  };
}

export type TonConnectInstance = {
  on: (event: string, callback: (payload: any) => void) => void;
  connect: () => Promise<any>;
  disconnect: () => void;
  openModal: () => Promise<void>;
  show: () => Promise<void>;
  open: () => Promise<void>;
  clear: () => void;
  modal?: {
    open: () => Promise<void>;
  };
  singleWalletModal?: {
    open: () => Promise<void>;
  };
} & WalletConnection;
