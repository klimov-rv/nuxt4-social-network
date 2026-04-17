import { resolve } from 'path';
import __BUILD_TIME__ from './app/buildTime.js';
import appSEO from './data/seo.json';

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2026-04-15',
  devtools: { enabled: true },

  srcDir: './app',
  alias: {
    '@': resolve(__dirname, './app'),
    '~~': resolve(__dirname, './'),
  },
  rootDir: __dirname,

  app: {
    head: appSEO,
  },

  css: ['~/assets/styles/global.scss'],

  modules: [
    '@element-plus/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/test-utils',
  ],

  elementPlus: {
    // cache: true,
    importStyle: 'scss',
    defaultLocale: 'en',
    imports: [['useLocale', 'es/hooks/use-locale/index.mjs']],
    // themes: ['dark'], ?
    injectionID: { prefix: 100, current: 1 }, // ?
  },

  components: [
    {
      path: '~/components/shared',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/entities',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/features',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/widgets',
      pattern: '**/*.vue',
      prefix: '',
    },
  ],

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || '',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    },
  },

  devServer: {
    // host: 'starter.vercel.app',
    // port: 443,
    // https: true,
    port: 3000,
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/*': ['./app/*'],
        },
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/global/_variables.scss" as *;
          @use "~/assets/styles/global/element/index.scss" as element;
          `,
          silenceDeprecations: ['if-function'],
        },
      },
    },
    define: {
      __BUILD_TIME__,
    },
  },

  nitro: {
    // preset: 'vercel',
    publicAssets: [
      {
        baseURL: '/',
        dir: resolve(__dirname, 'public'),
      },
    ],
  },

  i18n: {
    vueI18n: '~/providers/i18n/i18n.config.ts',
    defaultLocale: 'ru',
  },
});
