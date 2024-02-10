const express = require("express")
const Collection = require('./Mongo')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

/*app.get("/Login",cors(),(req,res)=>{
})
*/

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
app.post("/Register",async(req,res)=>{
    const{Fname,Lname,Email,Password}=req.body

    const data={
        Fname:Fname,
        Lname:Lname,
        Email:Email,
        Password:Password, 
    }

    try{
        const check=await Collection.findOne({Email:Email})

        if(check){
            res.json("Email Already Exists !! Sowwwy :(")
        }
        else{
            res.json("Email Registered Successfully !!! Enjoy :)")
            await Collection.insertMany([data])
        }
    }
    catch(e){
        res.json("Error Occured With The Server !")
    }

})


const port = 8000
app.listen(port,()=>{
    console.log(`Server Is Running On Port ${port} !`);
})
