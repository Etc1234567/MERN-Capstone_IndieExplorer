import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/artists.routes.js';

const app = express();

// Middleware: This sets up express with json data and cors.
app.use(express.json(), cors({
    // credentials: true,
    // origin: ["*"]
  }));

// This will load any environmental variables stored inside your .env file, like port. 
dotenv.config();
const PORT = process.env.PORT;

// db connection:
const DB_NAME = "Artists";
dbConnect(DB_NAME);

// routes
app.use("/api", router)

app.listen(PORT, () =>
    console.log(`👂 Server is listening on port: ${PORT}`)
);