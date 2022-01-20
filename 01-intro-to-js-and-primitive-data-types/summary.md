# Variables

* На практиці використовуємо `let` та `const`, оголошення через `var`
має недоліки, один з який, доступність змінної до її оголошення:
  
```javascript
console.log(fruit); // undefined

const fruit = 'apple';
```

# Data types

* Оператор `typeof` дозволяє отримати тип переданого значення:

```javascript
typeof "some string" // string
typeof 1 // number
```

* В JavaScript виділяють 8 типів даних: `number`, `string`, `boolean`,
  `null`, `undefined`, `symbol`, `bigint`, `object`

* Примітивні типи: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`, 
  все що не відноситься до цих 7-ми типів, є об'єктом.
  
* Всі примітиви є незмінними, або імутабельними типами даних:

# String

Стрічка - це примітивне значення, набір символів огорнутий одинарними, 
подвійними або зворотніми лапками:

```javascript
const string1 = "some string 1";
const string2 = 'some string 2';
const string3 = `some string 3`;
```

* Для того що би отримати значення довжини стрічки, використовуємо властивість
`length`.

* До кожного символа стрічки можно доступитись через індекс:

```javascript
const string = "hello world";

console.log(string[0]); // h
```
 
# Number

* Число - це примітивний тип даних.
* JavaScript може опрацьовувати числао в диапазоні від -2 ** 53 до 2 ** 53 без втрати точності
* JavaScript не може працюавти з числами більше за `1e308`, отримаємо `Infinity`
* Для приведення стрічки до числа використовуємо `parseInt()`, або `Number`

# Boolean

* Boolean - примітивний тип, який може приймати значення `true` або `false`
* Falsy значення в JavaScript: `false`, `0`, ``, `null`, `undefined`, `NaN`
* В JavaScript існує тільки наступний оператор порівняння: `===`
* В JavaScript оператор `&&` (логічне "і") має більший пріорітет нід логічним "або" `||`

```javascript
0 || 1 // 1
0 && 1 // 0

1 && 2 && 3 // 3
1 || 2 || 3 // 1

0 || 2 && 3 || false // 3
 ```
