import React from 'react'; 
import NavBar from "../navbar/NavBar"
import img3 from "../../images/Rectangle_13.png";
import logo from "../../logos/logo.png";
import logo2 from "../../logos/ph_phone.png";
import logo3 from "../../logos/clarity_user.png";
import defaultAvatar from "../../images/clarity_user-line.png"
import plusIcon from"../../images/ph_plus-fill.png"
import logoEmail from "../../logos/ic_outline-email.png"
import logoPassword from "../../logos/carbon_password.png"
import { Grid, Box, TextField, InputAdornment, Button, Typography, useMediaQuery, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SelectCity from './selectCity/SelectCity';
import { Link } from "react-router-dom"

const SignUp = () => {
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));  // Breakpoint for medium screens

  return (
    <Grid container sx={{ minHeight: '100vh', paddingTop: '79px' }}> 
      <NavBar/>
      
      {/* Left-side background image section */}
      <Grid 
        item xs={12} sm={6} 
        sx={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: { xs: 'none', md: 'none', lg: 'block' }, // Hide on small and medium screens, show on large screens
          position: 'fixed', // Fix the position
          top: 0,
          left: 0,
          width: '50%',
        }}
      >
        {/* Centered logo and circle for larger screens */}
        {!isSmallScreen && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Box component="img" src={logo} alt="Logo" sx={{ width: '80px', marginBottom: '20px' }} />
            <Box component="p" sx={{ fontWeight: 'bold', color: '#000' }}>
              THE CONSTRUCTION AND LANDSCAPING COMPANY
            </Box>
          </Box>
        )}
      </Grid>

      {/* Right-side form section */}
      <Grid
        item
        xs={12} // Full width on small and medium screens
        sm={12} // Full width on small and medium screens
        lg={6}  // Only 50% width on large screens
        sx={{
          marginLeft: { lg: '50%' }, // Only shift to right on large screens
          padding: { xs: '20px', sm: '50px' },
          backgroundColor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontFamily: 'Lato',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: '#121C17',
            fontSize: { xs: '24px', sm: '36px' },
          }}
        >
          SIGN UP
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          align="center"
          sx={{
            fontFamily: 'Lato',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: '#121C17',
            fontSize: { xs: '16px', sm: '20px' },
          }}
        >
          PROFILE PICTURE
        </Typography>

        {/* Avatar and Add Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: '20px' }}>
          <Avatar
            src={defaultAvatar}
            sx={{ width: '120px', height: '120px', backgroundColor: '#E0E0E0' }}
          />
          <img src={plusIcon} 
            style={{ position: "absolute", left: "53%", top: "75%" }}
            alt="Add Icon"
          />
        </Box>

        {/* Form Fields */}
        <TextField
          label="EMAIL ADDRESS"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logoEmail} alt="email-icon" style={{ width: '24px', height: '24px' }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="PHONE NUMBER"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logo2} alt="phone-icon" style={{ width: '24px', height: '24px' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="USERNAME"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logo3} alt="user-icon" style={{ width: '24px', height: '24px' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="PASSWORD"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logoPassword} alt="password-icon" style={{ width: '24px', height: '24px' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="RE-ENTER PASSWORD"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logoPassword} alt="password-icon" style={{ width: '24px', height: '24px' }} />
              </InputAdornment>
            ),
          }}
        />
        <SelectCity />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            color: '#000',
            backgroundColor: '#2BE784',
            border: '1px solid #121C17',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
          }}
        >
          Create Account
        </Button>
        
        <Grid container justifyContent="center" sx={{ mt: 1 }}>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: '500', textTransform: 'uppercase', color: '#121C17' }}>
            Have an account?
          </Typography>
          <Link to="/" style={{ color: "#0E7E83", marginLeft: "4px" }}>
            Login
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignUp;
