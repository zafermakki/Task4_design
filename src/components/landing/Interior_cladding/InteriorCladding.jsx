import React from 'react';
import { Grid } from '@mui/material';
import NavbarIC from './navbarIC/NavbarIC';
import Floors from './floors/Floors';
import Walls from './walls/Walls';
import Sinks from './sinks/Sinks';
import Faucets from './faucets/Faucets';
import Kitchens from './kitchens/Kitchens';

const InteriorCladding = () => {
 
  

 

  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '0px' }}>
      {/* Navbar */}
      <NavbarIC />

      {/* Main content */}
      <Grid item xs={12} style={{ padding: '2rem' }}>

        {/* Floors Section */}
        <Floors/>

        {/* Walls Section */}
        <Walls/>

        {/* Sinks Section */}
        <Sinks/>

        {/* Faucets Section */}
        <Faucets/>

        {/* Kitchens Section */}
        <Kitchens/>

      </Grid>
    </Grid>
  );
};

export default InteriorCladding;
