"use strict";

const movies = [];
const numOfMovies = prompt("syötä elokuvien määrä");

for (let i = 0; i < numOfMovies; i++) {
  const nimi = prompt("syötä elokuvan nimi");
  const arvosana = prompt("syötä arvosana");
  movies.push({
    nimi: nimi,
    arvosana: arvosana,
  });
}

movies.sort(function (a, b) {
  return b.arvosana - a.arvosana;
});

for (const movie of movies) {
  document.querySelector("#target").innerHTML += `<li>
      ${movie.nimi} (${movie.arvosana})
    </li>`;
}

document
  .querySelector("#suosikki")
  .insertAdjacentHTML("afterbegin", movies[0].nimi);

console.log(movies);
