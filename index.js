// https://www.omdbapi.com/?apikey=7566c271&s=fast
let searchResultEl = document.querySelector(".movie__title");
const moviesWrapperEl = document.querySelector(".movies__wrapper");
async function onSearchChange(event) {
  const movie = event.target.value
  const movies = await fetch(`https://www.omdbapi.com/?apikey=7566c271&s=${movie}`);
  const moviesData = await movies.json();
  const firstSix = moviesData.Search.filter((elem) => elem).slice(0, 6);
  let moviesHTML = firstSix;
  if (filter === 'NEWEST') {
     moviesHTML.sort((a, b) => b.Year - a.Year)
   }
   else if (filter === 'OLDEST') {
    moviesHTML.sort((a, b) => a.Year - b.Year)
   }
   else if (filter === 'A-Z') {
    let test = firstSix.sort((a, b) => a.Title.localeCompare(b.Title))
    console.log(test)
   }
  
  searchResultEl.innerHTML = moviesHTML
    .map((movie) => {
    return `<div class="movie">
   <figure class="movie__img--wrapper">
      <img class="movie__img" src="${movie.Poster}" alt="" />
   </figure>
   <div class="movie__description">
     <h2 class="movie__title">${movie.Title}</h2>
     <h3 class="movie__date">${movie.Year}</h3>
     <a
     href="https://imdb.com/title/${movie.imdbID}"
     class="imdb"
     target="_blank"
     >IMDB</a
     >
   </div>
 </div>`;
    })

    .join("");
  
}
async function renderMovies(filter) {
  const movies = await fetch(`https://www.omdbapi.com/?apikey=7566c271&s=${movie}`);
  const moviesData = await movies.json();
  const firstSix = moviesData.Search.filter((elem) => elem).slice(0, 6);
  let moviesHTML = firstSix;
  if (filter === 'NEWEST') {
     moviesHTML.sort((a, b) => b.Year - a.Year)
   }
   else if (filter === 'OLDEST') {
    moviesHTML.sort((a, b) => a.Year - b.Year)
   }
   else if (filter === 'A-Z') {
    let test = firstSix.sort((a, b) => a.Title.localeCompare(b.Title))
    console.log(test)
   }
  
  searchResultEl.innerHTML = moviesHTML
    .map((movie) => {
    return `<div class="movie">
   <figure class="movie__img--wrapper">
      <img class="movie__img" src=".website" alt="" />
   </figure>
   <div class="movie__description">
     <h2 class="movie__title">${movie.Title}</h2>
     <h3 class="movie__date">${movie.Year}</h3>
     <a
     href="https://imdb.com/title/${movie.imdbID}"
     class="imdb"
     target="_blank"
     >IMDB</a
     >
   </div>
 </div>`;
    })

    .join("");
  
   
}

function filterMovies(event) {
  renderMovies(event.target.value);
}
setTimeout(() => {
  renderMovies();
});

