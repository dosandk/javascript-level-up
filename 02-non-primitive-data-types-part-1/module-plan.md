# Plan for module #2

* Array
  * Створення масивів через літерал `[]` та конструктор `new Array()` 
  * Методи роботи з масивом:
    * `push`, `pop`, `unshift`, `shift`
    * `map`, `reduce`, `filter`, `slice`, `concat`
    * `splice`, `sort`, `reverse`
  * Ітерація масивів
  * Мутуючи та немутуючі методі масивів
  * Стрічка як масив символів
* Object
  * `Object` як асоціативний масив
    * Пошук елементів та дод в об'єкті
    * Додавання та видалення елементів об'єкта
    * Ітерація по властивостях об'єкта
  * `Object` як структура даних
    * Прототипне наслідування в Javascript, `Object.prototype`
    * `isPrototypeOf()`
    * `hasOwnProperty(prop)`
    * operator `instanceof`
    * Ітерація по власним та унаслідованим властивостях об'єкта
  * Передача даних по значенню та через посилання 
  * Optional Chaining operator: `obj.prop1?.prop2`
  * Об'єкт помилки: `Error`
* Колекції: `Set`, `Map`, `WeakMap`, `WeakSet`
* Ітерабельні структури даних
  * Rest parameter
  * Spread syntax
    ```js
      const arr = ['a', 'b', 'c'];
      const [...copy1] = arr;
      const copy2 = [...arr];
    ```
    
    ```js
      function foo (...props) {
      
      }
    
      function bar (first, ...rest) {
      
      }
    ```
* Functions
  * Загальні властивості функцій в Javascript:
    * робота з аргументами, аргументи по замовчуванню
    * повернення значення, `length`, `name`
    * closure
  * Типи функцій:
    * function expression (FE), function declaration (FD)
    * arrow function
  * Загальна теорія функцій:
    * Чисті та детерміновані функції
    * Функції першого порядку
    * Memoization
    * Partial
    * Curry
    * Recursion
  * `eval`
* Symbol. Well-known symbols:
  * `Symbol.iterator`

## Корисні посилання:

Специфікація:
* [ECMA-262 ECMAScript® language specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
* [Draft ECMA-262](https://tc39.es/ecma262/)

Довідник:
* [MDN JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript)

ECMAScript parsing infrastructure for multipurpose analysis:
* [Espree](https://www.npmjs.com/package/espree)
* [esprima](https://esprima.org/demo/parse.html)

