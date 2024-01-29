const global = {
    currentPage: window.location.pathname,
};
displayPopularMovies()
// Display 20 most popular movies
async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');

    results.forEach((movie) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
              ${movie.poster_path
                ? `<img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                class="card-img-top"
                alt="${movie.title}"
              />`
                : `<img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
            </a>
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">
                <small class="text-muted">Release: ${movie.release_date}</small>
              </p>
            </div>
          `;

        document.querySelector('#popular-movies').appendChild(div);
    });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = '37b5ecf8c4c5e3f07e0619120925902f';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
    );

    const data = await response.json();

    return data;
}


// Highlighted active webpage 
function HighlightActivewebpage() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute("href") === global.currentPage) {
            link.classList.add('active');
        }
    });
}

// tocheck current page location
function init() {
    switch (global.currentPage) {
        case "/":
        case '/index.html':
            console.log("home");
            break;
        case '/shows.html':
            console.log("Tv shows");
            break;
        case '/search.html':
            console.log("Search");
            break;
        case '/movie-details.html':
            console.log("Movies");
            break;
        case '/tv-details.html':
            console.log("Movies");
            break;
    };
    HighlightActivewebpage();
}
document.addEventListener('DOMContentLoaded', init);