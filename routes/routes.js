const movies = require('../fixtures/movies');

const indexRouter = (req, res) => {
    res.render("index",{
        movies: movies
    });
}

module.exports = [
    ['/',indexRouter],
]