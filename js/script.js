"use strict"; 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count  = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt("Один из последних просмотренных фильмов?", "").trim(),
                  lastFilmGrade = prompt("На сколько оцените его?", "").trim();
            if (lastFilm == '' || lastFilm == null || lastFilm.length > 50 || lastFilmGrade == '' || lastFilmGrade == null) {
                console.log('false');
                i--;
                continue;
            }
            personalMovieDB.movies[lastFilm] = lastFilmGrade;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (10 < personalMovieDB.count && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat === false ? personalMovieDB.privat = true : personalMovieDB.privat = false;
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, ``);
            if (personalMovieDB.genres == '' || personalMovieDB.genres == null) {
                i--;
                continue;
            }
        }
        personalMovieDB.genres.forEach(function(item,i) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    }
};

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"