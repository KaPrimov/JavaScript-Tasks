const faviconHandler = require('./favicon-handler.js');
const homeHandler = require('./home-handler.js');
const staticHandler = require('./static-file-handler.js');
const addMovieHandler = require('./add-movie-handler.js');
const allMoviesHandler = require('./view-all-movies.js');
const detailsMoviesHandler = require('./movie-details-handler');
const statusHandler = require('./header-handler');

module.exports = [ statusHandler, faviconHandler, homeHandler, addMovieHandler, allMoviesHandler, detailsMoviesHandler, staticHandler ]