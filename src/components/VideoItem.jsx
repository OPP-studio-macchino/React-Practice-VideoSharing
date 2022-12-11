import React from 'react'

import Grid2 from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";


const VideoItem = ({ video, onVideoSelect }) => {
	return (

        <Grid2 item xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                onClick={ () => onVideoSelect(video) }
            >
                <img style={{ marginRight: '20px' }} src={video.snippet.thumbnails.medium.url} alt="thumnail" />
            </Paper>
                <Typography variant='subtitle1'>
                    <b>{video.snippet.title}</b>
                </Typography>
        </Grid2>

            )
};

export default VideoItem;