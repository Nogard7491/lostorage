/*!
 * Lostorage library v1.0.6
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
     *
     * @return {boolean} флаг сущестования локального хранилища
     */
    Lostorage.prototype.checkEnabled = function () {

        try {
            return "localStorage" in window && window["localStorage"] !== null;
        } catch (ex) {
            return false;
        }
    };

    /**
     * Проверяет существует ли элемент в локальном хранилище.
     *
     * @param key ключ
     * @return {boolean} флаг сущестования переменной
     */
    Lostorage.prototype.exists = function (key) {

        return (this.get(key) === null) ? false : true;
    };

    /**
     * Получает ключ элемента по его порядковому номеру.
     *
     * @param index порядковый номер
     * @return {string} ключ переменной
     */
    Lostorage.prototype.getKey = function (index) {

        return localStorage.key(index);
    };

    /**
     * Получает значение элемента локального хранилища.
     *
     * @param key ключ
     * @return {mixed} значение переменной
     */
    Lostorage.prototype.get = function (key) {

        var result = localStorage.getItem(key);

        try {
            result = JSON.parse(result);
        } catch (ex) {
            return result;
        }

        return result;
    };

    /**
     * Создаёт элемент в локальном хранилище.
     *
     * @param key ключ
     * @param value значение
     */
    Lostorage.prototype.set = function (key, value) {

        localStorage.setItem(key, JSON.stringify(value));
    };

    /**
     * Удаляет элемент из локального хранилища.
     *
     * @param key ключ
     */
    Lostorage.prototype.delete = function (key) {

        localStorage.removeItem(key);
    };

    /**
     * Очищает локальное хранилище.
     */
    Lostorage.prototype.deleteAll = function () {

        localStorage.clear();
    };

    /**
     * Получает количество элементов локального хранилища.
     *
     * @return {number} количество элементов
     */
    Lostorage.prototype.getLength = function () {

        return localStorage.length;
    };

    return new Lostorage();
});