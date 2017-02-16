# Библиотека для удобной работы с local storage

## Подключение библиотеки

```javascript
    // подключение с помощью тега script
    <script src="node_modules/lostorage/dist/lostorage.min.js"></script>
```

```javascript
    // подключение с помощью Webpack
    window.lostorage = require("lostorage");
```

```javascript
    // подключение с помощью RequireJS
    requirejs(
        ["lostorage"],
        function(lostorage) {
            // ...
        }
    );
```

## Примеры использования

```javascript
    // проверка работает ли локальное хранилище
    lostorage.checkEnabled();
```

```javascript
    // проверка на существование переменной из локального хранилища
    lostorage.exists("variable_key");
```

```javascript
    // установка значения переменной в локальном хранилище
    lostorage.set("variable_key", "variable_value");
```

```javascript
    // получение значения переменной из локального хранилища
    lostorage.get("variable_key");
```

```javascript
    // удаление переменной из локального хранилища
    lostorage.delete("variable_key");
```

```javascript
    // очистка всего локального хранилища
    lostorage.deleteAll();
```