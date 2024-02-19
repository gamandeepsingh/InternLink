const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(cors())


app.listen(port , ()=>{
    console.log(`Server started at PORT: ${port}`);
})