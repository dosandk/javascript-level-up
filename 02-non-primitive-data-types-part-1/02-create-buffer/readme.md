# createBuffer

Необхідно реалізувати функцію, яка створює іншу функцію здатну зберігати строкові
данні у буфері. Створена функція приймає стрічку, а повертає результат конкатенації
всіх попередніх переданих стрічок з поточною стрічкою. 

**Note:** Перед початком імплементації слід зазирнути в файл тестів.

```js
const saveToBuffer = createBuffer();

saveToBuffer('first '); // first
saveToBuffer('second'); // first second
```

## Корисні посилання

* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
