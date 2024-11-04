import React from 'react';
import { Grid, Box, Typography, Button, useMediaQuery } from '@mui/material';
import pale from "../../../images/pale-85.png";
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const LastContent = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Do you want to logout?",
      icon: "question",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('https://backendsec3.trainees-mad-s.com/api/logout', {
          method: 'GET', // Change to 'POST' if required by the backend
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(response => {
          if (response.ok) {
            localStorage.removeItem("token");
            Swal.fire({
              title: "Logged out successfully",
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => navigate('/'));
          } else {
            throw new Error("Failed to log out");
          }
        })
        .catch(error => {
          Swal.fire({
            title: "Logout failed",
            text: error.message,
            icon: "error",
            confirmButtonText: "OK"
          });
        });
      }
    });
  };
  
  return (
    <Grid container style={{ minHeight: '39.3vh', width: "100%" }}>
      {/* Left Section */}
      <Grid item xs={12} md={5} style={{ minHeight: '39vh', position: "relative" }}>
        <img src={pale} style={{
          position: "absolute",
          bottom: "0",
          width: "300px"
        }} />
        
        {/* Only show this content when the screen is not small */}
        {!isSmallScreen && (
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            margin: "50px",
          }}>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              {t('Name')}
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              {t('Country')}
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              {t('Email')}
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              {t('Phone')}
            </Typography>
          </Box>
        )}
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={7} style={{ backgroundColor: '#031C1D', position: "relative", minHeight: '39vh', color: "#fff" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isSmallScreen ? "flex-start" : "flex-start",  // Left align for small screens
          margin: "50px",
        }}>
          {!isSmallScreen ? (
            <>
              {/* On larger screens, show only the values */}
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james williams
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                usa - Washington
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james96@gmail.com
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                +1 202 555 1234
              </Typography>
            </>
          ) : (
            <>
              {/* On small screens, stack labels with values */}
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                {t('Name')}
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james williams
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
                {t('Country')}
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                usa - Washington
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
                {t('Email')}
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james96@gmail.com
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
                {t('Phone')}
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                +1 202 555 1234
              </Typography>
            </>
          )}
        </Box>

        <Box sx={{
          position: "absolute",
          right: "0",
          bottom: "0"
        }}>
          <Button 
            variant='contained' 
            onClick={handleLogOut}
          sx={{
            color: "#fff",
            backgroundColor: "red",
            border: "2px solid #fff",
            margin: "10px",
          }}>
            {t('Log_out')}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LastContent;
