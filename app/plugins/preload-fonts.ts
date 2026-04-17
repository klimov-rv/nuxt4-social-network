import OnestRegular from '~/assets/fonts/Onest/Onest-Regular.woff2?url';
export default defineNuxtPlugin(() => {
  useHead({
    link: [
      {
        rel: 'preload',
        href: OnestRegular,
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    ],
  });
});
