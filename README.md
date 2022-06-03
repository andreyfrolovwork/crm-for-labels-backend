### CRM for labels
Используется СУБД MySQL.
Для запуска необходимо развернуть базу из папки /dump_db с названием db_for_label.
Значения по умолчанию.
```
DB_HOST='localhost'
DB_USER='root'
DB_PASSWORD='password'
DB_NAME='db_for_label'
DB_PORT='3307'
```
Остальные необходимые данные находятся в файлe .env
После разворачивания базы и установки пакетов yarn start