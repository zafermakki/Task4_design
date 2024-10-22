import React from 'react'
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';

import NavbarProfile from './navbarprofile/NavbarProfile'
import ContentProfile from './contentProfile/ContentProfile'
import LastContent from './lastContent/LastContent';

const Profile = () => {
  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '79px' }}>
        <NavbarProfile/>
        <ContentProfile/>
        <LastContent/>
    </Grid>
  )
}

export default Profile