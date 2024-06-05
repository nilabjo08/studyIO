import dotenv from "dotenv"
import mongoose from "mongoose"
import {app} from './app.js'
dotenv.config({
    path: './.env'
})


const connectDB = async()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("MongoDB Connected")
    }
    catch(error){
        console.log("MongoDB connection error" ,error);
        process.exit(1)
    }
}

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed",err);
})