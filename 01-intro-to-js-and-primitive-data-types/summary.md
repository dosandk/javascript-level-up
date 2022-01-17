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

"https://javascript.zoom.us/s/97758068451?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJ3ZWIiLCJjbHQiOjAsIm1udW0iOiI5Nzc1ODA2ODQ1MSIsInN0ayI6IkhYR3F1MV9raHpaUXJ4MUVsWkg3d1dkYjZWckVySjVMVzN2T0JlRmY5TW8uQmdZc0szUTBTRXhZVTJwUFprWmlSazV3UldGd1duZFNUMXBNVUV0SmVTdEVXRXBDTkZCM05YZFZibVJRWnoxQVlUTTJNMk0yWkdaaE9HRXdPRGRtT1RjeU9EWTFNV1k0TTJaaFpEWmtNVFJqWXpaaE16Y3daall3Tm1SalpETTNPVEkyWVRsak5XUTNNRGMwTVRJd1pBQU1jbVZzY0hoWEwxVkRaMEU5QUFOaGR6RUFBQUYtUkc3aDlRQVNkUUFBQUEiLCJhdWQiOiJjbGllbnRzbSIsInVpZCI6IkF1QzJrQnlnVHc2R19hYmFDN09hRXciLCJzayI6IjAiLCJzdHkiOjEwMCwid2NkIjoiYXcxIiwiZXhwIjoxNjQxODMyODI0LCJpYXQiOjE2NDE4MjU2MjQsImFpZCI6IjA5b0ljUEVVVE51MEwtUlB0LUZ6SHciLCJjaWQiOiIifQ.OslSfbN9n9KvuJJUQCu6P6eyIBE9aWpUiC-ohhQLJJ0"
