import { TonConnectUI } from '@tonconnect/ui';

let _tonConnectUI = null;

export const getTonConnectUI = async (options = {}) => {
  if (typeof window === 'undefined') {
    throw new Error('TonConnectUI can only be used on client side');
  }

  if (!_tonConnectUI) {
    _tonConnectUI = new TonConnectUI({
      manifestUrl:
        options.manifestUrl ||
        'https://ton-starter-kit.vercel.app/tonconnect-manifest.json',
      uiPreferences: {
        theme: 'DARK',
        colorsSet: 'TON',
        ...options.uiPreferences,
      },
      actionsConfiguration: {
        twaReturnUrl: 'https://t.me/app_bot',
        ...options.actionsConfiguration,
      },
    });
  }

  return _tonConnectUI;
};

export const resetTonConnectUI = () => {
  _tonConnectUI = null;
};
