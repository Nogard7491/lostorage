/*!
 * Lostorage library v1.0.2
 * https://github.com/Nogard7491/lostorage
 */
(function (factory) {
    "use strict";

    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(['lostorage'], factory);
    } else {
        window.lostorage = new factory();
    }
})(function () {

    /**
     * Создаёт объект.
     *
     * @constructor
     */
    var Lostorage = function () {

    };

    /**
     * Проверяет работает ли локальное хранилище.
     */
    Lostorage.prototype.checkEnabled = function () {

        var localStorageEnabled;

        try {
            if (this.get("lostoragetest") == "1") {
                localStorageEnabled = true;
            } else {
                this.set("lostoragetest", "1");
                localStorageEnabled = this.get("lostoragetest") == "1";
                this.delete("lostoragetest");
            }
        } catch (ex) {
            return false;
        }

        return localStorageEnabled;
    };

    /**
     * Проверяет существует ли переменная в локальном хранилище.
     *
     * @param key ключ
     */
    Lostorage.prototype.exists = function (key) {

        return (this.get(key) === null) ? false : true;
    };

    /**
     * Получает значение переменной из локального хранилища.
     *
     * @param key ключ
     */
    Lostorage.prototype.get = function (key) {

        return localStorage.getItem(key);
    };

    /**
     * Создаёт переменную в локальном хранилище.
     *
     * @param key ключ
     * @param value значение
     */
    Lostorage.prototype.set = function (key, value) {

        localStorage.setItem(key, value);
    };

    /**
     * Удаляет переменную из локального хранилища.
     *
     * @param key ключ
     */
    Lostorage.prototype.delete = function (key) {

        localStorage.removeItem(key);
    };

    /**
     * Очищает локальное хранилище.
     */
    Location.prototype.deleteAll = function () {

        localStorage.clear();
    };

    return new Lostorage();
});