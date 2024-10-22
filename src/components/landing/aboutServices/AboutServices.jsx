import React from 'react'
import { Grid } from '@mui/material';
import NavbarAS from './navbarAS/NavbarAS';
import Text from "../aboutServices/text/Text"
import VideoAS from './videoAS/VideoAS';
const AboutServices = () => {
  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '0px' }}>
        <NavbarAS/>
            <Grid item xs={12} style={{ padding: '2rem' }}>
                <Text/>
                <VideoAS/>
            </Grid>

    </Grid>
  )
}

export default AboutServices