import { mount } from '@vue/test-utils';

describe('Пример теста', () => {
  it('Проверяет рендеринг компонента', async () => {
    const component = await mount('/pages/index.vue');
    expect(component.text()).toContain('Hello');
  });
});
