import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import authRoutes from './view/authRoutes.js'


dotenv.config()
const app = express();

//middleware:-
app.use(cors());
app.use(express.json())



//test routes:-
app.get("/",(req,res)=>{
    res.send("goJourney backend running...")
})

app.use("/api/auth",authRoutes)

//mongoDB connect:-
mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>{
    console.log("MongoDB Error",err.message)
process.exit(1)
})

// //server
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is live on ${PORT}`)
})
