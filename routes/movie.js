const express = require('express')
const router = express.Router()


//getMovie Endpoint
const getMovie = require('../controllers/getMovie')
router.post("/getMovie",getMovie)

//getScreen Endpoint
const getScreen=require('../controllers/getScreen')
router.post('/getScreen',getScreen)

//getScreen Endpoint
const bookTicket=require('../controllers/bookTicket')
router.post('/bookTicket',bookTicket);

//getScreen Endpoint
const getSeats=require('../controllers/getSeats')
router.post('/getSeats',getSeats)



module.exports = router