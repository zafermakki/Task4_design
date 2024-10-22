import React from 'react';
import ReactPlayer from 'react-player';
import { Grid, Box } from '@mui/material';

const VideoAS = () => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: '0rem' }}>
      <Box sx={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
        <ReactPlayer
          url='https://youtu.be/zumJJUL_ruM'
          width='100%'
          height='80%'
          style={{ position: 'absolute', top: 0, left: 0 }}
          controls
        />
      </Box>
    </Grid>
  );
};

export default VideoAS;
