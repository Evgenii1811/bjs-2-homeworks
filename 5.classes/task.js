'use strict';

﻿//Задача №1. Печатное издание
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *=1.5;
    }

    set state(state) {
        if (state > 100) {
            this._state = 100;
        }
        else if (state < 0) {
            this._state = 0;
        }
        else {
            this._state = state;
        }  
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

//Задача №2. Библиотека
class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        }
        return;
    }

    findBookBy(type, value) {
        let searchResult = this.books.find(book => book[type] === value);
        return (typeof searchResult === 'object') ? searchResult : null; 
    }
        
    giveBookByName(bookName) {
       let reqBook = this.books.find(book => book.name === bookName);
       if (typeof reqBook === 'object') {
            this.books.splice(this.books.indexOf(reqBook), 1);
            return reqBook;
       }
       else return null;
    }
     
}
