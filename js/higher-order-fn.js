// Higher order functions


// A higher order function is a function that does atleast one of the following
// --- Takes one or more functions as an argument (parameter)
// --- Returns a function as its result

// {
//     name: "Debugging Dreams",
//     description: "A heartwarming and comedic movie that follows a group of software developers as they navigate through coding challenges, office dynamics, and pursue their dreams.",
//     duration: 110,
//     ratings: 4.7,
//     totalRating: 2000,
//     releaseYear: 2023,
//     releaseDate: "2023-09-15",
//     genres: ["Comedy", "Drama"],
//     directors: ["Jane Smith"],
//     coverImage: "https://example.com/debugging-dreams-cover.jpg",
//     actors: ["Alex Coder", "Lily Developer", "Max Bugcatcher"],
//    price: 8.99
// }

import { movies } from "./movies.js";

// ................ forEach ................
movies.forEach(movie => {
    console.log(movie);
});
console.clear();

// ................ filter ................
const filteredMovies = movies.filter(movie => {
    return movie.ratings === 4.7
})
console.log(filteredMovies);

// ................ map................
const mappedMovies =  movies.map(movie => {
    return  movie.ratings;
})
console.log(mappedMovies);

// ................ reduce ................
const reducedMoviesValue = mappedMovies.reduce((sum, movie) => {
    return sum + movie;
});
console.log(reducedMoviesValue)