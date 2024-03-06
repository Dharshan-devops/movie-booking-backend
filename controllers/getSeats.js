const Screen = require('../Models/screenModel')
const ObjectId = require('mongoose').Types.ObjectId;
const authorization = require('../middlewares/verifyAuth')
const map = require('lodash.map');
const filter =require('lodash.filter')

const getSeats = async (req, res) => {
    try {
        console.log("/findUserSeat endpoint is working");
        const getseatArray = await Screen.findOne({ title: "DemonSlayer" }).lean();
        const data = filter(getseatArray.seats, { 'bookedBy': new ObjectId('65e6ed68e94b787273e0bdc9') })
        const seats = map(data, 'seatId')
        res.send({
            Movie: getseatArray.title,
            Theatre: getseatArray.location,
            Time: getseatArray.time,
            Seats: [seats]
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports=getSeats