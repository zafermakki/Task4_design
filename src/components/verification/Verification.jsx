import React from 'react';
import NavBar from "../navbar/NavBar";
import imgcircle1 from "../../images/Ellipse_7.png";
import imgcircle2 from "../../images/Ellipse_8.png";
import imgcircleEmail from "../../images/morphis-mail-with-a-frosted-glass-effect.png";
import { Grid, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VerificationCodeInput from "./verificationCodeInput/VerificationCodeInput"

const Verification = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Detect small screens
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));  // Detect medium or smaller screens

  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '79px' }}> 
      <NavBar/>
      <Grid
        item
        xs={12}
        sm={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: isMobile ? '0px' : '0px',
        }}
      >
        {/* Conditionally render images only on large screens */}
        {!isMediumOrSmaller && (
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", width: isMobile ? '300px' : '500px', height: '100px' }}>
            <img 
              src={imgcircle2} 
              style={{
                width: isMobile ? "100px" : "150px",
                zIndex: 1,
                position: "absolute",
                bottom: isMobile ? "-20%" : "-55%",
                transform: isMobile ? "translateX(50%)" : "translateX(50%)"
              }} 
            />
            <img 
              src={imgcircleEmail} 
              style={{
                width: isMobile ? "150px" : "200px",
                position: "absolute",
                zIndex: 2,
                top: "75%",
                transform: isMobile ? "translateY(-40%)" : "translateY(-30%)"
              }} 
            />
            <img 
              src={imgcircle1} 
              style={{
                width: isMobile ? "100px" : "150px",
                zIndex: 1,
                position: "absolute",
                top: "140%",
                transform: isMobile ? "translateX(-30%) translateY(-50%)" : "translateX(-50%) translateY(-50%)"
              }} 
            />
          </div>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '20px' : '50px',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{
          fontFamily: 'Lato',
          fontStyle: "normal",
          fontWeight: "700",
          textTransform: "uppercase",
          zIndex:"3"
        }}>
          please verify account
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom align="center"
          sx={{
            fontFamily: 'Lato',
            fontStyle: "normal",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          enter the 6 digit code (contains letters and numbers) that we sent<br/> to your email address to verify your new account
        </Typography>

        <VerificationCodeInput/>

        <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
          <Typography
            sx={{ 
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            valid for 3 minutes
          </Typography>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
          <Typography
            sx={{ 
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: "500",
              textTransform: "uppercase",
              color:  "#0E7E83",
              cursor:"pointer"
            }}
          >
            resend code
          </Typography>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ 
            marginTop: '20px',
            color:"#000",
            boxSizing: "border-box",
            background: "#2BE784",
            border: "1px solid #121C17",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px"
          }}
        >
          verify and continue
        </Button>
      </Grid>
    </Grid>
  )
}

export default Verification;
