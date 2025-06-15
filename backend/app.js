import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connect from './db/db.js';


connect();


dotenv.config();

const app = express();

app.use(morgan('dev'));                // log requests to the console
app.use(express.json());              // convert json data to object -- interesting
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('hello mic check');
})

export default app;