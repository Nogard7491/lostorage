# Библиотека для удобной работы с local storage

Local storage (локальное хранилище) — база данных на стороне клиента,
содержащая пары ключ-значение.

Особенности Local storage:
* Большой объем хранилища (ограничивается только настройками браузера и
свободным местом на жестком диске)
* Данные хранятся на стороне клиента (высокая производительность)
* Неограниченное время жизни

Поддержка браузеров:
* IE 8+
* Firefox 3.5+
* Safari 4+
* Chrome 4+
* Opera 10.5+
* iPhone 2+
* Android 2+

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
    // проверка на существование элемента в локальном хранилище
    lostorage.exists("variable_key");
```

```javascript
    // установка значения элемента в локальном хранилище
    lostorage.set("variable_key", "variable_value");
```

```javascript
    // получение ключа элемента по его порядковому номеру
    lostorage.getKey();
```

```javascript
    // получение значения элемента из локального хранилища
    lostorage.get("variable_key");
```

```javascript
    // удаление элемента из локального хранилища
    lostorage.delete("variable_key");
```

```javascript
    // очистка всего локального хранилища
    lostorage.deleteAll();
```

```javascript
    // получение количества элементов локального хранилища
    lostorage.getLength();
```