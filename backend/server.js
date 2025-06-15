import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
import http from 'http';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`);
})

