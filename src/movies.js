// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (array) => array.map((director) => director['director']);  

//console.log(getAllDirectors(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (array) => array
    .filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    .length;  
//console.log(howManyMovies(movies));
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (array) => {
    if (movies.length) {
        const total = movies.reduce((acc, movie) => {
            if (typeof movie.rate === 'number') {
                acc += movie;    
            }    
        });
    return total / movies.length;    
};

console.log(ratesAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) => {};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array) => {};
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (array) => {}