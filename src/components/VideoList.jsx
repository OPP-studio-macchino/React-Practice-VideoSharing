import React from 'react';

import Grid2 from "@mui/material/Unstable_Grid2";

import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoSelect }) => {

    const listOfVideos = videos.map(video => (
        <VideoItem
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
        />
    ));

    return (
        <Grid2 container spacing={10}>
            {listOfVideos}
        </Grid2>
    )
}

export default VideoList