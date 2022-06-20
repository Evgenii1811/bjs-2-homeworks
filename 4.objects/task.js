
// Задача 1. Инкапсуляция студента
// Создайте функцию конструктор Student(name, gender, age) и с помощью оператора new несколько экземпляров объектов (студентов).

// Создайте доступный для всех экземпляров student метод setSubject(subjectName), 
// который при вызове будет устанавливать поле предмет subject экземпляра в subjectName. 
// Для этого добавьте в свойство Student.prototype функции конструктора функцию setSubject.

// Student.prototype.setSubject = function (subjectName) {
//   //ваш код
// }
// Создайте метод addMark(mark) по аналогии с п.2, который при вызове будет добавлять студенту оценку
// mark в свойство (массив) marks объекта. Обратите внимание, что ранее мы нигде не задавали свойство marks
// для инстансов(экземпляров). Значит нам надо проверять, что свойство существует. 
// Сделать это в методе можно следующим образом:
//   if(this.marks === undefined){ 
//     // добавить первую оценку 
//     } else {
//       // добавить вторую и последующие оценки в массив
//     }
// Создайте метод addMarks(mark1,mark2,mark3...) по аналогии с п.2, который при вызове будет добавлять студенту сразу несколько оценок.
// Подсказка: так как количество добавляемых оценок неизвестно, воспользуйтесь rest параметром.

// Создайте метод getAverage() по аналогии с п.2, который при вызове будет возвращать среднее арифметическое оценок студента.

// Создайте метод exclude(reason) по аналогии с п.2, который при вызове будет исключать студента из учебного процесса
// и устанавливать причину исключения. Для этого надо удалить свойства subject и marks и добавить свойство excluded со значением reason.

"use strict"

function Student(name, gender, age) {
    // Ваш код
this.name = name;
this.gender = gender;
this.age = age;
}

let jane = new Student("Джейн", "Ж","22");
let Igor = new Student("Игорь", "М","20");
let Pavel = new Student("Павел", "М","19");

Student.prototype.setSubject = function (subjectName) {
  //ваш код
this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}
Student.prototype.addMarks = function (...rest) {
  if(this.marks === undefined) {
    this.marks = [...rest];
  } else {
    this.marks.push(...rest);
  }
}

// ваш код для остальных методов
Student.prototype.getAverage = function () {
  let sum = 0;
  let length = this.marks.length;
  for (let i =0; i < length; i++) {
    sum += this.marks[i];
  }
  return sum / length;
}

Student.prototype.exclude = function (reason) {
this.excluded = reason;
delete this.marks;
delete this.subject;
}
