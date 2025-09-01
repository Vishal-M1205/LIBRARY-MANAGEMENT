import {PORT, mongodb_url} from './config.js';
import express from 'express';
import CORS from 'cors'
import mongoose from 'mongoose';
const app = express();
import router from './routes/routes.js';
app.use(express.json());
app.use(CORS({
    origin:"http://localhost:5173",
    methods:['GET','PUT','POST','DELETE'],
    allowedHeaders:['Content-Type']
}));
app.use('/books',router)

import {Book } from './models/bookModel.js';


app.listen(PORT,()=>{
    console.log(`Server is runnig on ${PORT}`)
})

mongoose.connect(mongodb_url).then(()=>{
    console.log("DB Connected");
}).catch((error)=>{
    console.log(error);
})
