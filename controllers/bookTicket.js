const Screen = require('../Models/screenModel')
const authorization = require('../middlewares/verifyAuth')

const bookTicket= async (req, res) => {
    try {
        console.log("book Ticket api is triggered")
        let data = req.body
        const seats = req.body.seats
        const title = req.body.title
        const time = req.body.time
        console.log(data)

        seats.forEach(async (element) => {
            const result = await Screen.findOneAndUpdate(
                { title: title, time: time, "seats.seatId": element },
                { "$set": { "seats.$.status": "not-available" ,"seats.$.bookedBy":req.user_id} },
                { new: true }
            );
            console.log("Updated document:", result);
        });

        res.send({ Message: 'Booked successfully' })
    } catch (err) {
        console.log(err.message)
    }
}

module.exports=bookTicket