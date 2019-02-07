const moviesList = document.getElementById('results');

const insertMovie = (data) => {
  data.Search.forEach((movie) => {

  let image = `<img src="${movie.Poster}" class="img-thumbnail" width='100'>`;

  let li = `<li>${image}</li>`;

  moviesList.insertAdjacentHTML('beforeend', li);

  });

}

const searchMovie = (query) => {
  let url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`;

  moviesList.innerHTML = "";

  fetch(url)
    .then(response => response.json())
    .then(insertMovie);
}

const updateResultList = (event) => {
  event.preventDefault();
  let query = document.getElementById('search').value;
  searchMovie(query);
}

export { searchMovie, updateResultList };




