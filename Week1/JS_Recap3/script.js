"use strict";

const movies = [];
const numOfmovies = prompt("How many movies do you want to watch?");

for (let i = 0; i < numOfmovies; i++) {
  const movieName = prompt("What is the name of the movie?");
  const movieRating = prompt("What is your rating for the movie? (1-10)");
  // if (movieRating < 1 || movieRating > 10) {
  //   alert("Please enter a rating between 1 and 10.");
  //   i--;
  //   continue;
  // }
  movies.push({
    name: movieName,
    rating: movieRating,
  });
}

movies.sort(function (a, b) {
  return b.rating - a.rating;
});

//console.table(movies);

document
  .querySelector("#best")
  .insertAdjacentHTML("afterbegin", movies[0].name);

for (const movie of movies) {
  document.querySelector("#list").innerHTML +=
    `<li>${movie.name}, ${movie.rating}</li>`;
}
