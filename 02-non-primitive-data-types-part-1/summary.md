# Objects

* В JavaScript все що не відноситься до 7-ми примітивних типів даних: 
 `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`, можемо 
 вважати об'єктом.

* Всі об'єкти в JavaScript передаються по посиланню:

```javascript
const obj = {
  color: 'red'
};

const anotherObj = obj;

anotherObj.color = 'green';

console.log(obj); // { color: 'green' }
```

* На практиці функції-обгортки НЕ використовуються з ключовим
  словом `new`: `new Object()`, `new Strings()`, `new Number()`, `new Boolean`

* Функції-обгортки використовуються для приведення типів, але без ключового слова `new`
 
```javascript
Boolean(1); // true
Number('100'); // 100
```

* Виключення - використання `new Array(10)` з одним аргументом для ініціалізації
 масивів певної довжини.

* `new Array(1, 2)` з двома аргументами ідентичний літералу масиву `[1, 2]`

* Всі об'єкти при приведенні до `boolean` перетворюються на `true`

```javascript
const arr = [];

if (arr) {
  // тіло буде виконано
}
```

* Два абсолютно одинакові об'єкта по структурі, будуть посилатись на різні адреса в пам'яті:

```javascript
[] === [] // false
({ color: 'green'}) === ({ color: 'green'}) // false
```

* Копію об'єкта можна створити за допомогою `spread syntax`:
```javascript
  const obj = { color: 'red'};
  const copy = {...obj};
  
  obj === copy; // false
```

# Arrays

* В JavaScript масиви належать до об'єктного типу даних 
* Методи `sort`, `reverse`, `splice`, мутують первинний масив,
  так само як і методи: `push`, `pop`, `shift`, `unshift` 
* Ітерацію по масивах зручно виконувати за допомогою `for...of`
* Копію масиву можна створити за допомогою `spread syntax`:
```javascript
const arr = ['a', 'b', 'c'];

const copy = [...arr];
```
* `Spread syntax` вміє робити тільки `shallow copy` об'єктів

# Functions

* В JavaScript існують функції вищого порядку, це означає що функція може бути
  передана в якості аргументу, або може бути повернена як значення іншої функції.

```javascript
const compare = (a, b) => {
  return a - b;
}

[3, 2, 1].sort(compare);
```
