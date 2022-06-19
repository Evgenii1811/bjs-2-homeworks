// Задача 1. Сравнить массивы
// Создайте функцию compareArrays(arr1, arr2), которая с помощью функции высшего порядка будет сравнивать значения двух массивов. 
// Если массивы имеют одинаковые значения на одинаковых индексах, compareArrays должна выдавать true (иначе false). 
// Используйте метод every для сравнения элементов одного массива с соответствующими элементами другого массива.

// console.log(compareArrays([2, 2, 2], [2, 2, 2]))
// console.log(compareArrays([1], [1, 2, 3]))
// console.log(compareArrays([1, 2, 3], [1]))
// console.log(advancedFilter([-10, 12, -12, -3]))
// console.log(advancedFilter([-6, 6, -21, 21]))
// console.log(advancedFilter([0, 11, -0, 12]))


"use strict"

function compareArrays(arr1, arr2) {
  let result;
  // Ваш код
  if (arr1.length != arr2.length) {
    result = false;
  } else {
    result = arr1.every((element, i) => element === arr2[i]);
  }
  return result; 
}

// Задача 2. Фильтрация и преобразование массива
// Создайте функцию advancedFilter(arr), которая отбирает из массива чисел только положительные числа,
// кратные 3 и возвращает новый массив с отобранными числами, умноженными на 10. 
// Для этого к исходному массиву примените метод filter. 
// Можно 2 раза: сначала отберите только положительные числа, затем только кратные 3. 
// Потом используйте метод map, чтобы умножить полученные значения на 10. 
// В задаче следует пользоваться методами массива, а не циклом for.
// let result = arr.filter(...).filter(...).map(...)
// Пример вызова:

// advancedFilter([-1,6,-9,3]); // [60,30]
// advancedFilter([-10,-21,12,123]); // [120, 1230]
// advancedFilter([-1,-2]); // []
"use strict"

function advancedFilter(arr) {
  let resultArr;
  // Ваш код
  resultArr = arr.filter((item) => item > 0)
     .filter((item) => item % 3 === 0)
     .map((item) => item * 10);
  return resultArr; // array
}
