const Screen = require('../Models/screenModel')
const getScreen= async (req, res) => {

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
}

module.exports=getScreen