import React from 'react';
import NavBar from "../navbar/NavBar";
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavbarLanding from './navbarlanding/NavbarLanding';
import ImgContent from './imgcontent/ImgContent';
import InteriorCladding from './Interior_cladding/InteriorCladding';
import LandscapingDepartment from './landscaoing_department/LandscapingDepartment';
import AboutServices from './aboutServices/AboutServices';
import BusinessExhibtion from './business_exhibtion/BusinessExhibtion';
import Footer from './footer/Footer';

const Landing = ({setmyMOde}) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Detect small screens
    const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));  // Detect medium or smaller screens

  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '79px' }}> 
            <NavbarLanding setmyMOde={setmyMOde}/>
            <ImgContent/>
            <InteriorCladding/>
            <LandscapingDepartment/>
            <AboutServices/>
            <BusinessExhibtion/>
            <Footer/>
    </Grid>
  )
}

export default Landing



  

