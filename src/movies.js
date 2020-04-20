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
const ratesAverage = (array)  => {
    if (!array.length) return 0;
    const rate = array
        .map((movie) => movie.rate)
        .map((rate) => typeof rate === 'number' ? rate : 0);
    const avgRates = (rate.reduce((acc, rate) => acc + rate, 0)) / rate.length;
    const roundAvg = Math.round(avgRates * 10 ** 2) / 10 ** 2; //It gets a number to two decimals
    return roundAvg;
}
//console.log(ratesAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) => { 
    const dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));
    if (!dramaMovies.length) return 0;
    const averageRateDrama = (dramaMovies.reduce((acc, drama) => acc + drama.rate, 0))/ dramaMovies.length ; 
    return Number(averageRateDrama.toFixed(2));
};

//console.log(dramaMoviesRate(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {
    const newArray = array.map((movie) => movie);
    newArray.sort((a, b) => a.year > b.year ? 1 : -1);
    return newArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {
    const newArray = array.map((movie) => movie.title);
    newArray.sort((a, b) => a > b ? 1 : -1);
    if (newArray.length > 20) {
        return newArray.slice(0, 20);
    }
    return newArray;
};

//console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array) => {
    const time = array.filter((movie) => {
        let newArray = movie.duration
            .replace('h', '')
            .replace('min', '');    
        console.log(newArray);
        //let newNumber = parseInt(newArray, 10);
        //return 

    })
};
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (array) => {};
