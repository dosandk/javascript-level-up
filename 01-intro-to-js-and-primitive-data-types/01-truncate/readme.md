# truncate

Потрібно написати функцію яка приймає першим аргументом стрічку, а другим число -
довжину стрічки після виконання функції `truncate`.
Функція `truncate` має обрізати стрічку до заданої довжини, та повернути масив 
у вигляді `[head, tail]`:

* `head` - це "голова" стрічки, те що ми обрізали 
* `tail` - це "хвіст", все що залишилось від стрічки

**Note:** Перед початком імплементації слід зазирнути в файл тестів.

```js
truncate('JavaScript data types and data structures', 10); // ['JavaScript', ' data types and data structures']
```

**Additional resources:**

* [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
