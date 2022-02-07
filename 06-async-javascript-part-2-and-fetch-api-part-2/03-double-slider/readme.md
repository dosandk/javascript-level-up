# DoubleSlider компонент

Необхідно реалізувати DoubleSlider компонент,
який буде відповідати за фільтрацію списку товарів.

![preview](preview.png)

На вхід компонент має приймати об'єкт виду:

```
{
  min = 100,
  max = 200,
  formatValue = value => value,
  selected = {
    from: min,
    to: max
  },
  precision = 0,
  filterName = ''
}
```

**Note:** Перед початком імплементації слід зазирнути в файл тестів.

## Події компонента

DoubleSlider компонент повинен зробити `dispatch` події `range-selected`
при зміні вибраного діапазону.

