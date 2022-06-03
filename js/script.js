"use strict"; 

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

function detectPersonalLevel() {
    if (numberOfFilms < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (10 < numberOfFilms && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms > 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
              lastFilmGrade = prompt("На сколько оцените его?", "");
        if (lastFilm == '' || lastFilm == null || lastFilm.length > 50 || lastFilmGrade == '' || lastFilmGrade == null) {
            console.log('false');
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = lastFilmGrade;
    }
}

rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, ``);
    }
}

writeYourGenres();



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
