"use strict"

class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
}

// Добавялем новый звонок в коллекцию существующих
addClock (timeLine, func, id) {
    if (id === undefined) {
      throw new Error("Параметр ID не передан");
    }  

    // Свойство для коллекции звонков
    const searchAlarm = this.alarmCollection.findIndex((item) => item.id === id);
    if (searchAlarm === -1) {
      this.alarmCollection.push({time : timeLine, callback : func, id : id});
    }
      else {
        console.error("Звонок с таким ID уже существует");
      }
    }
  
    //  Удаляем определенный звонок
  removeClock(id) {
      let findAlarm = this.alarmCollection.filter((item) => item.id === id);
      if (findAlarm !== -1) {
        this.alarmCollection.splice(this.alarmCollection.findIndex(i => i === findAlarm), 1);
        console.log("Успешное удаление будильника");
        return true;
      }
      else {
        return false;
      }
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (hours < 10) { 
      hours = "0" + hours;
    }
    if (minutes < 10) {
       minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
  }



  // запускаем все звонки
   start() {
    let checkClock = alarm => {
     let currentTime = this.getCurrentFormattedTime();
      if (alarm.time === currentTime) {
        alarm.callback();
      } 
    }

    if (this.timerId === null) {
      this.timerId = setInterval(this.alarmCollection.forEach((alarm) =>
        checkClock(alarm)), 3000);
      
    }
  }
// останавливаем выполнение звонков
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
    this.timerId = null;
  }
// печатаем звонки
  printAlarms() {
    this.alarmCollection.forEach((item, index, array) => 
      console.log(`Будильник заведен на ${item.time} id ${item.id}`));
  }
// удаляем звонки
  clearAlarms() {
    this.alarmCollection = [];
  }
}


function alarm() {
let clock = new AlarmClock();
clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Уже нужно вставать!"), 1);
let currentDate = new Date();
currentDate.setMinutes(currentDate.getMinutes() + 1);
clock.addClock(clock.getCurrentFormattedTime(currentDate), () => { console.log("Давно пора вставать"); 
clock.removeClock() }, 2);
currentDate = new Date();
currentDate.setMinutes(currentDate.getMinutes() + 2);
clock.addClock(clock.getCurrentFormattedTime(currentDate),
    () => { console.log("Вот вот проспишь!"); clock.stop(); clock.clearAlarms() }, 3);
clock.printAlarms();
clock.start();
}

alarm();




