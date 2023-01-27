const express = require('express');
const cors = require('cors');
const User = require('./config');
const app = express();
app.use(express.json())
app.use(cors())

app.post("/create",async (req, res)=>{
    const data = req.body
    console.log("data of users", data);
    await User.add(data)
    res.send({msg:"User Added"})
})

app.listen(4000,()=>console.log("Running on port 4000!"))