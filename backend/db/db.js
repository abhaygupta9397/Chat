import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connect() {
    console.log(process.env.MONGODB_URI)
    mongoose.connect(process.env.MONGODB_URI) 
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(err => {
            console.log(err);
        })
}

export default connect;