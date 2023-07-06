
import express from "express";
// import cookieParser from "cookie-parser";
import cors from "cors";
// import dotenv from "dotenv"
import mongoose from "mongoose";
import { router as product } from "../Routes/product";
import {router as cartRoute} from "../Routes/cartRoute"
// dotenv.config();
const app = express();
const port = 5500;
const MongoDB = "mongodb+srv://Infant-Health-Care:einsten02@cluster0.kf7e0vs.mongodb.net/?retryWrites=true&w=majority";

async function connection(connectionString:string) {
 await mongoose.connect(connectionString);
 console.log("database connected successfully")   
}
try {
      connection (MongoDB);
     
} catch (error) {
     console.log("unable to connect to database:", error)
     
}
app.use (express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors);
app.use("/api/v1/", product)
app.use("/api/v1/",cartRoute)


app.listen(port , () =>{
     console.log(`Server is running at ${port}`);
});   
