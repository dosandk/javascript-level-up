# createGetter

Необхідно реалізувати функцію, яка приймає стрічку у вигляді "prop-1.prop-2.prop-n", где "prop-1, ..., prop-n",
де "prop-n" це властивості об'єкту розділені крапкою. Функція повинна повернути іншу функцію, яка по заданим 
властивостям знайде значення в переданому їй об'єкті.


```javascript
function createGetter(field) {
  /* ... */
}

const product = {
  category: {
    title: {
      name: 'john'
    }
  }
}

const getter = createGetter('category.title');

console.log(getter(product)); // { name: 'John'}
```
