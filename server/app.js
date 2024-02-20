const express = require('express')
require('dotenv').config()
const app = express()
require("./db/databaseConn")
const cors = require('cors')
const port = process.env.PORT || 4000;
const router = require("./routes/router")

// middleware
app.use(express.json())
app.use(cors())
app.use(router)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port , ()=>{
    console.log(`Server started at PORT: ${port}`);
})