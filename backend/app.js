import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.route.js';
import projectRoutes from './routes/project.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';    


connect();


dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));                // log requests to the console
app.use(express.json());              // convert json data to object -- interesting
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);

app.get('/',(req,res)=>{
    res.send('hello mic check');
})

export default app;