import React,{useState} from 'react';
import NavBar from "../../navbar/NavBar"
import img2 from "../../../images/Rectangle_12.png";
import logo from "../../../logos/logo.png"
import logoEmail from "../../../logos/ic_outline-email.png"
import logoPassword from "../../../logos/carbon_password.png"
import {Grid,Box, TextField,InputAdornment, Button, Typography, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const ChangePassword = () => {
  
  const [t, i18n] = useTranslation();

    const theme = useTheme();
    const iconFilter = theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)';
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [message, setMessage] = useState();
    const navigate = useNavigate()

    const handleConfirm = async () => {
        if (password != confirmPassword) {
            alert('not match')
            return;
        }
        try{
            const formData = new FormData()
            formData.append('password',password)
            formData.append('password_confirmation',confirmPassword)
            const response = await fetch('https://backendsec3.trainees-mad-s.com/api/user/password/reset-password',{
                method:'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body:formData
            })
            const data = await response.json();
            if (response.ok) {
                navigate('/')
            } else {
                alert('error')
            }
        }catch(error) {
            console.error('error',error)
        } 
    }

  
  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '79px' }}> 
      <NavBar/>
      <Grid item xs={false} sm={6} style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
      {!isMobile && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '25%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.6)', // Slight transparency
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Logo inside the circle */}
          <Box component="img" src={logo} alt="Logo" sx={{ width: '80px', marginBottom: '20px' }} />

          {/* Text inside the circle */}
          <Box component="p" sx={{ fontWeight: 'bold', color: '#000' }}>
            THE CONSTRUCTION AND LANDSCAPING COMPANY
          </Box>
        </Box>
      )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
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
        }}>
          {t('change_password')}
        </Typography>

        <TextField
          label="PASSWORD"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logoPassword} alt="password-icon" style={{ width: '24px', height: '24px',filter: iconFilter }} />
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <img src={logoPassword} alt="password-icon" style={{ width: '24px', height: '24px',filter: iconFilter }} />
                </InputAdornment>
                ),
            }}
        />

        <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
        <Typography
            sx={{ 
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "500",
                textTransform: "uppercase",
            }}
        >
            {t('we_will_send_you_a_6_digit_code_to_verify_your_account')}
        </Typography>
        </Grid>


        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleConfirm}
          style={{ marginTop: '20px',
                  color:"#000",
                  boxSizing: "border-box",
                  background: "#2BE784",
                  border: "1px solid #121C17",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
        }}
        >
          {t('SEND_CODE')}
        </Button>
      </Grid>

      
    </Grid>
  )
}

export default ChangePassword