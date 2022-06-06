// Zadacha №1 
// Требуется написать функцию getArrayParams(arr), которая получает на вход массив чисел
//  от -100 до 100 и возвращает минимальное, максимальное и среднее арифметическое значений массива.

// Создайте функцию которая принимает на ввод массив.
// Внутри функции задайте 3 переменных min, max, sum присвоив им некоторые первоначальные значения.
// Какие значения? (внутри подсказка, подумайте прежде чем открыть)
// min = Infinity max = -Infinity
// Также можно использовать в качестве min и max первый элемент массива.
// Пройдите по массиву циклом for либо while и для каждого элемента определите:
// Если элемент больше предыдущего максимума, то максимум становится равен элементу
// Если элемент меньше предыдущего минимума, то минимум становится равен элементу
// Добавляем элемент к сумме sum для последующего вычисления среднего.
// После прохождения цикла функция должна возвращать объект вида: {max:..., min: ..., avg:...}, 
// то есть минимальное, максимальное и средние значения. Чтобы вычислить среднее надо сумму элементов поделить на их количество. 
// Среднее надо округлить до 2х знаков после запятой (для округления воспользуйтесь toFixed). Заметьте, toFixed возвращает string, 
// так как вам необходимо вернуть число (number), то необходимо дополнительное преобразование значения к числу.
// Пример
// getArrayParams([-99, 99, 10]) // { min: -99, max: 99, avg: `3.33` }


function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg =0;
  let sum = 0;
  for (let i =0; i < arr.length; i++) {
  sum = sum + arr[i];
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
avg = parseFloat((sum / arr.length).toFixed(2));
return { min: min, max: max, avg: avg };
}






// Zadacha №2
// Итак, напишем две функции: makeWork(arrOfArr,func) - в наших терминах это мясорубка и worker(arr) - это насадка.
// Напишите функцию worker которая должна находить сумму элементов массива и возвращать её.
// Функция makeWork принимает входные данные - массив массивов (мясо) 
// и функцию worker - это насадка, таким образом makeWork - функция высшего порядка.
// Затем makeWork применяет полученную функцию worker к каждому из полученных массивов worker(arrOfArr[i]) 
// вычисляя таким образом сумму элементов.
// Если сумма больше предыдущего максимума, то меняем максимум
//  (его следует хранить в отдельной переменной и задавать в начале функции makeWork)
// Таким образом наша мясорубка не только перемалывает
// (находит сумму чисел каждого массива) но и возвращает самый жирный кусок (с максимальной суммой)


function worker(arr) {         //насадка
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {   //мясорубка
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
  let arrSum = func(arrOfArr[i]);
  if (arrSum > max) {
    max = arrSum;
  }
}
return max;
}

// console.log(makeWork([[10,10,20],[20,19,10]],worker)); 40 и 49 // ответ 49
// console.log(makeWork([[12,23,31],[41,5,61]],worker)); 66 и 107 // ответ 107
// console.log(makeWork([[14,21,36],[15,26,39]],worker)); 71 и 80 // ответ 80


// // Zadacha3
// Попробуем реализовать другую насадку для нашей мясорубки. 
// Для этого напишем функцию worker2 которая должна находить разность максимального и минимального значения внутри массива. 
// Это можно интерпретировать как расстояние между минимумом и максимумом. Заметьте, что данная разность - всегда неотрицательное число 
// (используйте Math.abs() для вычисления модуля числа). Затем используйте данную насадку как аргумент для функции makeWork.


function worker2(arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min;
}


console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2); // 30
