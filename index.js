// https://www.omdbapi.com/?apikey=7566c271&s=fast
const moviesWrapperEl = document.querySelector(".movies__wrapper");
const searchResultEL = document.querySelector(".movie__title");
const movieWrapper = document.querySelector(".movies__wrapper");

async function renderMovies() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=7566c271&s=fast");
  const moviesData = await movies.json();
  const firstSix =  moviesData.Search.filter((elem) => elem).slice(0, 6);  
//   searchResultEl.innerHTML = 
  console.log(firstSix)
  .map(
   (movie) =>  `<div class="movie">
    <figure class="movie__img--wrapper">
    <img class="movie__img" src="./js assets/logo.svg" alt="" />
    </figure>
    <div class="movie__description">
    <h2 class="movie__title">000000</h2>
    <h3 class="movie__date">000000</h3>
    <a
        href="https://imdb.com/title/.website"
        class="imdb"
        target="_blank"
        >IMDB</a
    >
    </div>
</div>`

  )
  .join("")
}
renderMovies();


