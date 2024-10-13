const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 5000;

//middlewear
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Sapphire hotel server is running")
})

app.listen(port, ()=>{
    console.log("Sapphire hotel server is running on ",port);
})