export default defineNuxtPlugin(async () => {
  const { initTonConnect } = useWallet();
  await initTonConnect();
});
