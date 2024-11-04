import React from 'react'
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';

import NavbarProfile from './navbarprofile/NavbarProfile'
import ContentProfile from './contentProfile/ContentProfile'
import LastContent from './lastContent/LastContent';
import NavbarLanding from '../landing/navbarlanding/NavbarLanding';


const Profile = ({setmyMOde}) => {
  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '79px' }}>
        {/* <NavbarProfile/> */}
        <NavbarLanding setmyMOde={setmyMOde}/>
        <ContentProfile/>
        <LastContent/>
    </Grid>
  )
}

export default Profile