import React,{useState} from 'react';
import NavBar from "../navbar/NavBar"
import img1 from "../../images/Rectangle_11.png";
import logo1 from "../../logos/logo.png"
import logoEmail from "../../logos/ic_outline-email.png"
import logoPassword from "../../logos/carbon_password.png"
import {Grid, TextField,InputAdornment, Button, Typography, useMediaQuery} from '@mui/material';
import { Link } from "react-router-dom"
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState('');

  const [t, i18n] = useTranslation();

  const theme = useTheme();
  const iconFilter = theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e) => {
    e.preventDefault()
    const credentails={
      email,
      password
    }

    try{
      const response = await fetch('https://backendsec3.trainees-mad-s.com/api/login',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentails)
      })
      if (!response.ok ){
          throw new Error('login failed')
      } 
      const data  = await response.json()
      if (data.access_token){
        const token = data.access_token
        localStorage.setItem('token',token)
        navigate('/profile')
      } else {
        throw new Error('invalid')
      }
    } 
    catch(error) {
      setError('try again')
    }
  }

  return (
    <Grid container style={{ minHeight: '100vh', paddingTop: '79px' }}> 
      <NavBar/>
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
          {t('welcome')}
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom align="center"
        sx={{
            fontFamily: 'Lato',
            fontStyle: "normal",
            fontWeight: "700",
            textTransform: "uppercase",
        }}
        >
          {t('REINVENT_YOUR_SPACE_WITH_US')}
        </Typography>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={logo1} alt="Logo" style={{ width: '100px' }} />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={logoEmail} alt="email-icon" style={{ width: '24px', height: '24px',filter: iconFilter  }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img 
                    src={logoPassword} 
                    alt="password-icon" 
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      filter: iconFilter 
                    }} 
                  />
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
              {t('have_an_account?')}
          </Typography>
            <Link to={'/signup'} style={{
              color: "#0E7E83"
            }}>
              {t('Sign_Up')}
            </Link>
          </Grid>
          <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
          <Typography
                sx={{ 
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "500",
                  textTransform: "uppercase",
              }}
          >
            {t('Forgot_Password?')}
          </Typography>
            <Link to={'/password'} style={{
              color: "#0E7E83"
            }}>
              {t('Change_Password')}
            </Link>
          </Grid>


          <Button
            variant="contained"
            color="primary"
            fullWidth
            type='submit'
            style={{ marginTop: '20px',
                    color:"#000",
                    boxSizing: "border-box",
                    background: "#2BE784",
                    border: "1px solid #121C17",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "10px"
          }}
          >
            {t('Log_In')}
          </Button>
        </form>

      </Grid>

      <Grid item xs={false} sm={6} style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </Grid>
  );
}

export default Login;
