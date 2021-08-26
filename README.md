```bash
$ yarn install
$ yarn build
$ yarn start
$ php -S localhost:3300 -t _external
```

После выполнения команд запустится 3 проекта:
* http://localhost:3100/ - собранный проект в режиме SPA
* http://localhost:3200/ - собранный проект в режиме SSR
* http://localhost:3300/ - внешний сайт подключающий проект в режиме SPA

## Немного про структуру:

### `backend`
Содержит страницы и компоненты для режима SPA 

### `frontend`
Содержит страницы и компоненты для режима SSR

### `common`
Общие компоненты и настройки

### `настройки`
* nuxt.config.js - Общие настройки
* backend/nuxt.config.js - Специфичные настройки для SPA
* frontend/nuxt.config.js - Специфичные настройки для SSR
