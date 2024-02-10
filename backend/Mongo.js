const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017")
    .then(() => {

        console.log("Database Connected !")

    })
    .catch(() => {
        console.log("Connection Failed !")
    })




const newSchema = new mongoose.Schema({
    FName: {
        type: String,
        required: true,
    },
    LName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }

})


const Collection = mongoose.model("Collection", newSchema);


module.export = Collection