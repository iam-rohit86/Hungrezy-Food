import mongoose from "mongoose"
require("dotenv").config();

export default async () => {
    return mongoose.connect( process.env.MONGODB_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
        
    })
};