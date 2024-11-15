import express from "express";
import videoRouter from "./routes/videos.js";
import 'dotenv/config';
import cors from 'cors';

const app=express();

//Add cors policy
const { CORS_ORIGIN } = process.env;
app.use(cors({ origin : CORS_ORIGIN}));

app.use('/', videoRouter);

// //Test post request
// app.post('/videos', (req,res) => {
//     console.log(req.body);

//     const {
//         title,
//         description
//     } = req.body;
    
//     const newVideo = {
//         id: uuidv4(),
//         title: title,
//         channel: "new channel",
//         image: "static file?",
//         description: description,
//         views: "1,000",
//         likes: "500",
//         duration: "5:20",
//         video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
//         timestamp: "1701670662000",
//         comments: []
//     };

//     res.json(newVideo);
//     console.log(newVideo)
// });


// Add port
const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`listen to port ${PORT}`)
});