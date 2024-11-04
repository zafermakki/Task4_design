import React, {useState} from 'react'; 
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
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SignUp = () => {

  const navigate = useNavigate()

  const [userName, setUserName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [confirmPassword, setConfirmPassword]= useState('')
  const [phoneNumber, setPhoneNumber]= useState('')
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleChangeCountry = (event) => {
      setCountry(event.target.value);
  };

  const handleChangeCity = (event) => {
      setCity(event.target.value);
  };

  const handleSignPage = async () => {
    try {
      const formData = new FormData();
      formData.append('full_name', userName);
      formData.append('phone', phoneNumber);
      formData.append('address', 'ss');
      formData.append('governorate', country);
      formData.append('city', city);
      formData.append('email', email);
      formData.append('password', password);
  
      const response = await fetch('https://backendsec3.trainees-mad-s.com/api/register', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      console.log('Response:', data);
  
      if (response.ok) {
        alert(data.message);
        navigate('/verification', { state: { email } });
      } else {
        alert(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const [t, i18n] = useTranslation();
  
  const theme = useTheme();
  const iconFilter = theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)';
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
            fontSize: { xs: '24px', sm: '36px' },
          }}
        >
          {t('SIGN_UP')}
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
          value={email}
          fullWidth
          margin="normal"
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
          label="PHONE NUMBER"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logo2} alt="phone-icon" style={{ width: '24px', height: '24px',filter: iconFilter  }} />
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
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logo3} alt="user-icon" style={{ width: '24px', height: '24px',filter: iconFilter  }} />
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={logoPassword} alt="password-icon" style={{ width: '24px', height: '24px',filter: iconFilter  }} />
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
                <img src={logoPassword} alt="password-icon" style={{ width: '24px', height: '24px',filter: iconFilter  }} />
              </InputAdornment>
            ),
          }}
        />
         <div style={{
          display:"flex",
          justifyContent:"center"
      }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-country">country</InputLabel>
                <Select
                    labelId="demo-select-country"
                    id="demo-select-country"
                    value={country}
                    label="country"
                    onChange={handleChangeCountry}
                    sx={{
                        width:"120px"
                    }}
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Syria</MenuItem>
                <MenuItem value={20}>UAE</MenuItem>
                <MenuItem value={30}>USA</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-city">city</InputLabel>
                <Select
                    labelId="demo-select-city"
                    id="demo-select-city"
                    value={city}
                    label="city"
                    onChange={handleChangeCity}
                    sx={{
                        width:"120px"
                    }}
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={40}>Aleppo</MenuItem>
                <MenuItem value={50}>Dubia</MenuItem>
                <MenuItem value={60}>NewYork</MenuItem>
            </Select>
        </FormControl>
      </div>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignPage}
          sx={{
            mt: 2,
            color: '#000',
            backgroundColor: '#2BE784',
            border: '1px solid #121C17',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
          }}
        >
          {t('Create_Account')}
        </Button>
        <Grid container justifyContent="center" sx={{ mt: 1 }}>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: '500', textTransform: 'uppercase' }}>
            {t('Have_an_account')}
          </Typography>
          <Link to="/" style={{ color: "#0E7E83", marginLeft: "4px" }}>
            {t('Log_In')}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignUp;
