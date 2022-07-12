### CRM for labels
### Как развернуть?
```
yarn install
yarn start
```
Используется СУБД PostgreSQL
Для запуска необходимо развернуть базу из папки /migrations с названием db_for_label.
Значения по умолчанию.
```
DB_HOST='localhost'
DB_USER='postgres'
DB_PASSWORD='password'
DB_NAME='db_for_label'
DB_PORT='5432'
```
Остальные необходимые данные находятся в файлe .env
После разворачивания базы и установки пакетов yarn start

.env_example необходимо переименовать в .env