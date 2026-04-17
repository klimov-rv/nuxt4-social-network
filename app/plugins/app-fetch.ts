// import { authAPI } from '../components/features/auth/api/auth.api';
import { articlesAPI } from '../components/features/articles/api/articles.api';

interface DemoErrorResponse {
  status: number;
  statusText?: string;
  [key: string]: any;
}

interface FetchHooksErrorParams {
  response: DemoErrorResponse;
}

export default defineNuxtPlugin({
  name: 'app-fetch',
  async setup(_nuxtApp) {
    const config = useRuntimeConfig();
    const appFetch = $fetch.create({
      baseURL: config.public.apiBaseUrl,
      headers: {
        Accept: 'application/json',
      },
      async onResponseError({ response }: FetchHooksErrorParams) {
        const { status, statusText } = response;
        console.error(statusText);
        console.log('_nuxtApp');
        console.log(_nuxtApp);
        // _nuxtApp.runWithContext(() => navigateTo('/modal-error-path'));
        if ([401, 422, 404, 500].includes(status)) {
          throw createError({
            statusCode: status,
            statusMessage: statusText || 'Error',
            fatal: true,
          });
        }
      },
    });

    const mainResources = {
      articles: articlesAPI(appFetch),
    };

    return {
      provide: {
        appFetch,
        mainResources,
      },
    };
  },
});

declare module '#app' {
  interface NuxtApp {
    $appFetch: typeof $fetch;
    $mainResources: {
      articles: ReturnType<typeof articlesAPI>;
    };
  }
}
