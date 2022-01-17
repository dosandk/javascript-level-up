# mask

Потрібно реалізувати функцію яка приймає першим аргументом стрічку, а другим число - позицію символу стрічки, яка
буде замаскована символом "*". Наприклад виклик `mask('foobar', 2)` замаскує кожен другий символ стрічки: "f*o*a*",
a виклик `mask('foobar', 3)` замаскує кожен третій: "fo*ba*"

**Note:** Перед початком імплементації слід зазирнути в файл тестів.

```js
mask('Lorem ipsum dolor sit amet', 4); // Lor*m i*sum*dol*r s*t a*et
```

**Additional resources:**

* [Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
