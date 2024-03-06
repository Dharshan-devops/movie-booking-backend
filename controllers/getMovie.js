const Movie = require('../Models/movieModel')

const getMovie=async (req, res) => {
    try {
        console.log("get movie api is triggered")
        const data = req.body
        const movieName = data.movie
        const getMovieDetails = await Movie.findOne({ title: movieName })


        //Movie detail validation
        setTimeout(() => {
            // Movie detail validation
            if (!getMovieDetails) {
                res.json({ Message: "Movie not Found" });
            } else {
                res.json(getMovieDetails);
            }
        }, 2000);

    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
}
module.exports=getMovie