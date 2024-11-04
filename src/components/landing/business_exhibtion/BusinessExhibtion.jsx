import React from 'react';
import { Grid, Typography, Button, Box, useTheme } from '@mui/material';
import imgButton from "../../../logos/Vector.png";
import iconlocation from "../../../logos/location.png"
import iconemail from "../../../logos/ic_outline-email.png"
import whatsapp from "../../../logos/whatsapp.png"
import { useTranslation } from 'react-i18next';

import img1 from "../../../images/interior1.png"
import img2 from "../../../images/interior2.png"
import img3 from "../../../images/interior3.png"
import img4 from "../../../images/interior4.png"
import img5 from "../../../images/interior5.png"
import img6 from "../../../images/interior6.png"


import img7 from "../../../images/exterior1.png"
import img8 from "../../../images/exterior2.png"
import img9 from "../../../images/exterior3.png"
import img10 from "../../../images/exterior3.png"
import img11 from "../../../images/exterior6.png"
import img12 from "../../../images/exterior4.png"


const BusinessExhibtion = () => {
  const [t, i18n] = useTranslation();

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const textColor = isDarkMode ? '#FFFFFF' : '#121C17';
  const backgroundColor = isDarkMode ? '#000' : '#fff';

  return (
    <Grid container style={{ paddingTop: '0px', backgroundColor: "#0E7E83", paddingBottom: '2rem' }}>
  {/* Heading */}
  <Grid item xs={12} sm={6} sx={{ marginBottom: '20px', marginLeft: "2rem" }}>
    <Typography
      variant="h6"
      sx={{ fontWeight: 'bold', color: "#121C17", textTransform: "uppercase", fontSize: { xs: "25px", sm: "30px", md: "35px" } }}
    >
      {t('Business_Exhibition')}
    </Typography>
  </Grid>

  {/* Interior and Exterior Sections */}
  <Grid container item xs={12} justifyContent="space-around" spacing={0}>
    {/* Interior Section */}
    <Grid item xs={12} md={5} sx={{ backgroundColor: backgroundColor, padding: "10px", margin: { xs: "10px 0", md: "10px" } }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor, textTransform: "uppercase", fontSize: "14px" }}>
          {t('Interior')}
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#14B05D', color: '#fff',margin:"5px" }}>
          View All
          <img src={imgButton} style={{ width: "15px", margin: "5px" }} />
        </Button>
      </Grid>

      {/* Images */}
      <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
        {[img1, img2, img3, img4, img5, img6].map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box component="img" src={image} sx={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }} />
          </Grid>
        ))}
      </Grid>
    </Grid>

    {/* Exterior Section */}
    <Grid item xs={12} md={5} sx={{ backgroundColor: backgroundColor, padding: "10px", margin: { xs: "10px 0", md: "10px" } }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor, textTransform: "uppercase", fontSize: "14px" }}>
          {t('Exterior')}
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#14B05D', color: '#fff',margin:"5px" }}>
          View All
          <img src={imgButton} style={{ width: "15px", margin: "5px" }} />
        </Button>
      </Grid>

      {/* Images */}
      <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
        {[img7, img8, img9, img10, img11, img12].map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box component="img" src={image} sx={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>

  {/* Contact Us Section */}
  <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "space-between", flexDirection: { xs: 'column', md: 'row' }, margin: "10px" }}>
    <Grid item>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#121C17", textTransform: "uppercase", fontSize: "35px" }}>
        Contact Us
      </Typography>
    </Grid>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={iconlocation} alt="Location" />
      <Typography sx={{ marginLeft: 1 }}>
        1234 Greenway Drive<br />Springfield, IL 62701
      </Typography>
    </Grid>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={whatsapp} alt="WhatsApp" />
      <Typography sx={{ marginLeft: 1 }}>
        (555) 123-4567
      </Typography>
    </Grid>
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={iconemail} alt="Email" />
      <Typography sx={{ marginLeft: 1 }}>
        info@zandnconstruction.com
      </Typography>
    </Grid>
  </Grid>
</Grid>
  );
};

export default BusinessExhibtion;





