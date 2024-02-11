const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const userModel = require('./Users')

mongoose.connect("mongodb://localhost:27017/Orange")
const port = 8000
app.listen(port, () => {
    console.log(`Server Is Running On Port ${port} !`);
})

app.post("/Login", async (req, res) => {
    const { Email, Password } = req.body

    try {
        const Check = await Collection.findOne({ Email: Email })  //check for duplicate Email !!!!!
        if (Check) {
            res.json("Email Exists")
        }
        else {
            res.json("Does Not Exist")
        }
    }
    catch (e) {
        res.json("Error Occured With The Server !")
    }
})
app.post("/Register", async (req, res) => {
    userModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})


