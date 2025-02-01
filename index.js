import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(bodyParser.json());

//Cors configuration
app.use(cors({
    origin: '',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));

//Get request
app.get('/', (req,res) => {
    res.send('Back-end is running');
});

//Database connection
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl).then(()=>{
    console.log('Database connected successfully');
}).catch(()=>{
    console.log('Failed to connect to database');
});

//Server running
app.listen(5000, (req,res)=>{
    console.log('Server is running on PORT 5000');
});