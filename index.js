// Importing Envirnoment Variables
require("dotenv").config();


// Libraries

import  express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth"


// Database Connection

import ConnectDB from "./database/connection"

const hungrezy = express();

// application middleware
hungrezy.use(express.json());
hungrezy.use(express.urlencoded({extended: false }));
hungrezy.use(helmet());
hungrezy.use(cors());


// Application Routes
hungrezy.use("/auth", Auth);

hungrezy.get("/", (req , res) => res.json({message:"Setup is Success"}));
hungrezy.listen(3002, () => 
ConnectDB()
.then(() => console.log("Server is Running"))
.catch( () => console.log("Server is Running, but database connection failed") )
);