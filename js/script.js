"use strict"; 

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilmFirst = prompt("Один из последних просмотренных фильмов?", ""),
      lastFilmFirstGrade = prompt("На сколько оцените его?", ""),
      
      lastFilmSecond = prompt("Один из последних просмотренных фильмов?", ""),
      lastFilmSeconsGrade = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilmFirst] = lastFilmFirstGrade;
personalMovieDB.movies[lastFilmSecond] = lastFilmSeconsGrade;

console.log(personalMovieDB);