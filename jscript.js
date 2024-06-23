const apiKey = '3a97e7c';

function searchMovies(){
    const searchInput = document.getElementById('#searchInput').ariaValueMax;

    if(searchQuery.trim() === '') {
        alert('Please enter a movie title');
        return;
    }

    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if(data.response === "True"){
                displayMovies(data.Search);
                console.log(data.Search);
            } else {
                alert('No movies found');
            }
        })
        .catch(erroro => {
            console.log('Error', error);
        })
}

function displayMovies(movies){
    const moviesResultContainer = document.getElementById('movies-container');
    moviesResultContainer.innerHTML = ' ';


    movies.fetch(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = 
            `
                <div class="movieCard">
                    <div id="movieImgBlock">
                    <img src="${movie.Poster}"/>
                    </div>
                    <h2>${movie.Title}</h2>
                    <p>${movie.Year}</p>
                </div>
            `;
        moviesResultContainer.appendChild(movieElement);
  });
}