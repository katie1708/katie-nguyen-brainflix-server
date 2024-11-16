import express from "express";
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

//Read video data from JSON file
const jsonData = fs.readFileSync("./data/videos.json","utf-8");
const videoData = JSON.parse(jsonData);

const videoRouter=express.Router();

//Middleware
//body parsing
videoRouter.use(express.json()) 
videoRouter.use(express.urlencoded({ extended: true }))
//Use static file
videoRouter.use(express.static('./public'))

// GET /videos endpoint
videoRouter.get('/videos', (req,res) => {
    const videoList = videoData.map((video) => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }
    });
    res.json(videoList);
});

// GET /videos/:id endpoint
videoRouter.get('/videos/:id', (req,res) => {
    const requestedVideo = videoData.find((video) => video.id === req.params.id);
    res.json(requestedVideo);
});

// POST /videos endpoint
videoRouter.post('/videos', (req,res) => {
    const {
        title,
        description
    } = req.body;
    
    const newVideo = {
        id: uuidv4(),
        title,
        channel: "Channel of the new video",
        image: "http://localhost:8080/images/Upload-video-preview.jpg",
        description,
        views: "0",
        likes: "0",
        duration: "5:20",
        video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: []
    };

    res.json(newVideo);

    videoData.push(newVideo);

    fs.writeFileSync(
        "./data/videos.json",
        JSON.stringify(videoData)
    )
});

export default videoRouter;