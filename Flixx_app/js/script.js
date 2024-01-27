const global = {
    currentPage: window.location.pathname,
};

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