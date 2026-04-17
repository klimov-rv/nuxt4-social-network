/**
 * Error handler plugin for SSR
 */

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', (error) => {
    // Log for debugging
    console.error('[Nuxt Error Handler]', {
      statusCode: error?.statusCode,
      statusMessage: error?.statusMessage,
      message: error?.message,
    });
  });

  /**
   * TODO: server-side error handler, that ensures proper 404 handling in SSR mode
   */
  //     console.log('[defineEventHandler] event:', event);
  // if (event.node.res.statusCode === 404) {
  //   console.log('[404 Handler] Route not found:', event.node.req.url);
  // }
});
