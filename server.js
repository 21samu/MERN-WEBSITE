import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authroute from './route/authRoute.js';
import cors from 'cors';
import categoryroutes from './route/CategoryRoutes.js';
import productRoutes from "./route/ProductRoutes.js"

// configure env

dotenv.config();

//database

connectDB()

// rest object

const app=express();

// Middelware

app.use(cors());
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authroute);
app.use("/api/v1/category", categoryroutes);
app.use("/api/v1/product", productRoutes);


// rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>");
})

// port

const PORT = process.env.PORT ||8080; 

// 
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE}mode on port ${PORT}`);
})
