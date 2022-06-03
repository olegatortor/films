"use strict"; 

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

if (numberOfFilms < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (10 < numberOfFilms < 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms > 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

// let i = 0;
// while  (i < 2) {
//     const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//           lastFilmGrade = prompt("На сколько оцените его?", "");
//     i++;
//     if (lastFilm == '' || lastFilm == null || lastFilm.length > 50 || lastFilmGrade == '' || lastFilmGrade == null) {
//         console.log('false');
//         i--;
//         continue;
//     } else {
//         personalMovieDB.movies[lastFilm] = lastFilmGrade;
//     }
// }

// let i = 0;
// do {    
//     const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//           lastFilmGrade = prompt("На сколько оцените его?", "");
//     i++;
    
//     if (lastFilm == '' || lastFilm == null || lastFilm.length > 50 || lastFilmGrade == '' || lastFilmGrade == null) {
//         console.log('false');
//         i--;
//     } else {
//         personalMovieDB.movies[lastFilm] = lastFilmGrade;
//     }
// }
// while (i < 2);

console.log(personalMovieDB);