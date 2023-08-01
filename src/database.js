const mongoose = require("mongoose")

const { BE_APP_MONGODB_HOST, BE_APP_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://${BE_APP_MONGODB_HOST}/${BE_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(_ => {
        console.log("database connected")
    })
    .catch(err => {
        console.log(err)
    })