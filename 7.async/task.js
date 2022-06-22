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
  remoteClock(id) {
      const findAlarm = this.alarmCollection.filter((item) => item.id === id);
      if (findAlarm !== -1) {
        this.alarmCollection.splice(this.alarmCollection.findIndex(i => i === findAlarm), 1);
        console.log("Успешное удаление будильника");
        return true;
      }
      else {
        return false;
      }
  }
}