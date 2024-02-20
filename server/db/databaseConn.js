require('dotenv').config()
const mongoose= require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("DB connected Succcessfully");
})
.catch((err)=> console.log("Error in DB CONNECTION",err))
