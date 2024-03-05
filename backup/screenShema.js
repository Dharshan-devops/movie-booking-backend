const mongoose=require('mongoose')

const screenSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    seats:{
        type:Array,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    screentype:{
        type:String,
        required:true
    },
    movieSchedules:[
        {
            movieId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Movie',
                required:true
            },
            showTime: String,
            notavailableseats: [String],
            showDate: Date
        }
    ]
})

module.exports=mongoose.model('Screen',screenSchema)