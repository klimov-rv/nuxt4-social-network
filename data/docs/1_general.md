# Основная информация

## Папки и файловая структура

Cтруктура папок базово - на основе рекомендации [Nuxt 4](https://nuxt.com/docs/4.x/directory-structure):

```
*
/frontend
    └── /app
        └── /assets
        └── /components
            └── /entities
            └── /features
            └── /shared
            └── /widgets
        └── /composables
        └── /layouts
        └── /middleware
        └── /pages
        └── /plugins
        └── /utils
        └── /types
        └── app.vue
        └── theme.ts
    └── /public
    └── /store
    └── /server
        └── /api
        └── /middleware
        └── /plugins
        └── /routes
        └── /utils
    └── /tests
    └── nuxt.config.ts
```

- /app/**assets**: Обрабатываемая статика изображений, стилей и других ресурсов
- /app/**components**: Многоразовые компоненты - для порядка делим на [слои по FSD](<#декомпозиция-по-feature-sliced-design-(fsd)>)
- /app/**layouts**: Компоненты макета для разных страниц
- /app/**middleware**: Кастомные middleware.
- /app/**pages**: Компоненты, представляющие отдельные страницы (А так же слой ["Pages" в рамках FSD](https://fsd.how/ru/docs/reference/layers/#pages))
- /app/**plugins**: Плагины Nuxt с возможностью инициализировать доп функционал на старте приложения, глобально, с контролем порядка запуска.
- /app/**composables**: Прослойка вспомогательных функций с возможностью хранения состояния (Рекомендую использовать максимально изолированно - что бы вынести всю сложную логику из компонента и скрыв из него детали в композабл).
- /app/**utils**: Вспомогательные функции и хелперы, [не связанные с функционалом хранения состояния](https://nuxt.com/docs/guide/directory-structure/utils).
- /app/**public**: аналогично `static` из Nuxt2 - статика для доступа по ссылке
- **store**: Глобальное хранилище (стора)
- **tests**: Файлы тестов

### Декомпозиция по Feature-Sliced Design (FSD)

Структура папок внутри `components/..` - в соответствии с методологией **Feature-Sliced Design (FSD)**. Из [7 слоёв](https://fsd.how/ru/docs/reference/layers/) в components организуем 4 слоя:

- **`shared`**: Самый нижний слой. Атомарные компоненты и утилиты (например, `Button`, `Input`).
- **`entities`**: Базовые сущности приложения (например, `User`, `Product`).
- **`features`**: Функциональные возможности (например, `Auth`, `Search`).
- **`widgets`**: Самостоятельные блоки, используемые на нескольких страницах (например, `Header`, `Footer`).

#### Автоимпорт

Для удобства использования компонентов настроен автоимпорт с учётом FSD:

- Компоненты из любого слоя доступны без префиксов папок, к которых они находятся (например, `components/widgets/Header.vue` импортируется как `<Header />`).

#### Пример

```
/components
  /shared
    /ui
      Button.vue          --> <UiButton />
  /entities
    BodyCell.vue          --> <BodyCell />
    /Table
      BodyCell.vue        --> <TableBodyCell />
  /features
    /Auth
      LoginForm.vue       --> <AuthLoginForm />
  /widgets
    /Header
      NavLink.vue         --> <HeaderNavLink />
```

#### Полезные ссылки

- [Официальная документация FSD](https://fsd.how/ru/docs/get-started/overview/)
- [Преимущества FSD](https://fsd.how/ru/docs/get-started/overview/#advantages)

## Основные паттерны

### Двустороннее взаимодействие компонентов Vue

Используем для "дальностоящих" общих данных взаимодействие через **global store (Pinia)**
А для локальных данных при ["props drilling"](https://vuejs.org/guide/components/provide-inject.html#prop-drilling) не более чем 2 компонента вниз - **props/emits**

![communication between Vue components](./img/tak.png)

_Local state в composables_ используем для вынесения локальной логики и возможного переиспользования
_provide/inject_ по возможности не используем, для упрощения и повышения читабельности архитектуры

Здесь важно понимать, что любая неочевидная связь приносит с собой возможные скрытые эффекты, о которых будет знать и помнить (пока) тот разработчик, который это всё разрабатывал.

![communication between Vue components](./img/ne_tak.png)

[более подробная статья на хабре](https://habr.com/ru/articles/668072/)

### Композаблы и утилиты

Если ваша функция принимает на вход определенные числа и возвращает наименьшее значение из них, то у такой функции нет работы с состоянием, а значит это не может называться composable, в действительности это функция утилита.

#### ✏️ Чеклист для определения Vue composable

- Ваша функция внутри себя использует методы жизненного цикла. (onMounted, onBeforeUnmount и т.д.)
- Ваша функция внутри себя использует другие composables
- У вашей функции есть логика работы с состоянием (stateful logic)

[Источник](https://habr.com/ru/articles/805491/)
