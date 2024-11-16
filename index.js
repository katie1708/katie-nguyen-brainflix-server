import express from "express";
import videoRouter from "./routes/videos.js";
import 'dotenv/config';
import cors from 'cors';

const app=express();

//Add cors policy
const { CORS_ORIGIN } = process.env;
app.use(cors({ origin : CORS_ORIGIN}));

app.use('/', videoRouter);

// Add port
const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`listen to port ${PORT}`)
});