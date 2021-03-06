# Sector.business-test - тестовое задание
SPA, созданное в соответствии с предложенным макетом Figma, в котором представлена таблица с данными пользователей и возможностью сортировки и поиска.
____

## 1. Ссылки:
```
https://alex-mercy.github.io/Sector.business-test/
```
## 2. Запуск приложения:
```
1) npm install
2) npm start
```
## 3. Технологии:
* ```Redux``` - стейт менеджер
* ```React-Router-Dom``` для роутинга
*  ```Redux Saga``` в качестве middleware
* ```Axios``` для асинхронных запросов
* ```json-Server``` для имитации api
*  ```classnames``` для работы с классами

## 4. Описание приложения:
```
1. При входе на страницу отображается таблица с данными.
2. На одной странице таблицы показывается только 10 записей.
3. Под таблицей располагаются элементы, показывающие количество страниц таблицы.
4. Кнопки “Назад” и “Далее” переключают страницы таблицы.
5. Переключение между страницами происходит без перезагрузки. 
6. При нажатии на заголовки столбцов происходит сортировка записей по id, заголовку или описанию.
7. При нажатии на стрелочки у заголовков меняется сортировка: по возрастанию / убыванию.
8. В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение присутствует.
9. Страница таблицы отображается в URL браузера.

```
