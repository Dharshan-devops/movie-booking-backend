const express = require('express')
const router = express.Router()


const User = require('../Models/userModel')
const Movie = require('../Models/movieModel')
const Screen = require('../Models/screenModel')
const Test=require('../Models/testSchema')

router.get('/test', (req, res) => {
    console.log('Movie api triggered')
    res.send('Movie API is working')
})



router.post("/getMovie", async (req, res) => {
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
})





router.post('/getScreen', async (req, res) => {

    try {
        console.log("get Screen Api is triggered")
        const data = req.body
        console.log(data.title)
        const getScreenDetails = await Screen.find({ title: data.title })
        if (!getScreenDetails || getScreenDetails.length === 0) {
            res.send({ Message: "Screens were unavailable for this movie" })
        }
        else {
            res.send(getScreenDetails)
        }
    }
    catch (err) {
        console.log(err.message)
    }


})




router.post('/bookTicket', async (req, res) => { 
    try{
    console.log("book Ticket api is triggered")
    let data= req.body
    const seats= req.body.seats
    const title=req.body.title
    const time=req.body.time
    console.log(data)

    seats.forEach(async (element) => {
        const result = await Screen.findOneAndUpdate(
            { title: title,time:time,"seats.seatId": element },
            { "$set": { "seats.$.status": "not-available" } },
            { new: true }
        );
        console.log("Updated document:", result);
    });

    res.send({Message:'Booked successfully'})
}catch(err){
    console.log(err.message)
}
});


module.exports = router
  
  
  
  