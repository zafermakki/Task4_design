import React from 'react'
import NavbarLD from './navbarLD/NavbarLD'
import { Grid } from '@mui/material';
import Shrubs from './shrubs/Shrubs';
import Pavements from './pavements/Pavements';

const LandscapingDepartment = () => {
  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '0px' }}>
            <NavbarLD/>
            <Grid item xs={12} style={{ padding: '2rem' }}>

                <Shrubs/>

                <Pavements/>

            </Grid>
    </Grid>

  )
}

export default LandscapingDepartment