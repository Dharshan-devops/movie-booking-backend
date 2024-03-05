const mongoose=require('mongoose')
 
const bookingSchema =new mongoose.Schema({
    showTime:{
        type:String,
        required:true
    },
    showDate:{
        type:Date,
        required:true
    },
    movieid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        required:true
    },
    theatreid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Screen',
        required:true
    },
    seats:[{
        type:String,
        status:String,
        seatRow:String,
        seatCol:String,
        seatRowName:String,
        seat_id:{
            type:String,
            required:true
        },
    }],

    totalprice:{
        type:Number,
        required:true
    },

    paymentId:{
        type:String,
        required:true
    },
    paymentType:{
        type:String,
        required:true
    }
}
)

module.exports = mongoose.model('Booking',bookingSchema)