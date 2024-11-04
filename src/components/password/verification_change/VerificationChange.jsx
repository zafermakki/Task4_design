import React,{ useState, useRef } from 'react';
import NavBar from "../../navbar/NavBar";
import imgcircle1 from "../../../images/Ellipse_7.png";
import imgcircle2 from "../../../images/Ellipse_8.png";
import imgcircleEmail from "../../../images/morphis-mail-with-a-frosted-glass-effect.png";
import { Grid,TextField, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const VerificationChange = () => {
  const [t, i18n] = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Detect small screens
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));  // Detect medium or smaller screens

  const [code, setCode] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);
  
  const navigate = useNavigate()

  const location = useLocation()

  const email = location.state?.email || ''

  // Handle the change for each input
  const handleChange = (index,value) => {
      if (value.length <= 1) {
        const newCode = [...code]
        newCode[index]=value
        setCode(newCode)
      }
  };

  const handleVerifiy = async () => {
    const verificationCode = code.join(""); // Join the array into a string
    if (verificationCode.length !== 6) {
      alert("please enter a valid code");
      return;
    }
  
    try {
        const formData = new FormData()
        formData.append('email',email)
        formData.append('code',verificationCode)
        const response = await fetch("https://backendsec3.trainees-mad-s.com/api/user/password/verify-forgot-Password-code", {
            method: "POST",
            body:formData
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/confirmPassword");
      } else {
        alert(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReset = async () => {
      try{
          const formData = new FormData()
          formData.append('email',email)

          const response = await fetch('https://backendsec3.trainees-mad-s.com/api/resend-verification-code',{
            method:'POST',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body:formData
          })
          const data = response.json()
          if(response.ok) {
              alert('successfully')
          } else {
            alert('error')
          }
      } catch(error) {
        console.error(error,'error')
      }
  }

  // Handle backspace to move focus back to the previous field
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

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
          {t('please_verify_account')}
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom align="center"
          sx={{
            fontFamily: 'Lato',
            fontStyle: "normal",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          {t('enter_the_6_digit_code')}<br/> {t('to_your_email_address')}
        </Typography>
          {/* 6 digits input */}
        <Grid container justifyContent="center" spacing={2} style={{ marginTop: '20px' }}>
          {code.map((value, index) => (
            <Grid item key={index}>
              <TextField
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: 'center',
                    fontSize: '24px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '5px',
                    border: '1px solid #121C17'
                  }
                }}
                value={code[index]}
                onChange={(e) => handleChange(index,e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                inputRef={(el) => (inputRefs.current[index] = el)}
              />
            </Grid>
          ))}
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
            {t('valid_for_3_minutes')}
          </Typography>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
          <Typography
            onClick={handleReset}
            sx={{ 
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: "500",
              textTransform: "uppercase",
              color:  "#0E7E83",
              cursor:"pointer"
            }}
          >
            {t('resend_code')}
          </Typography>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleVerifiy}
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
          {t('verify_and_continue')}
        </Button>
      </Grid>
    </Grid>
  )
}

export default VerificationChange;
