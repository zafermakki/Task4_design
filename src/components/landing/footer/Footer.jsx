import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from "../../../logos/logo.png"
import logofacebook from "../../../logos/facebook.png"
import logoinstagram from "../../../logos/instagram.png"

const Footer = () => {
  return (
    <Box 
      sx={{
        width:"100%",
        background: "linear-gradient(180deg, #074143 0%, #031C1D 100%)", // Gradient background
        height: "auto", // Allow height to be dynamic based on content
        padding: 3, // Add padding around the content
        color: "white" // Set text color to white for better visibility
      }}
    >
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        justifyContent="space-between" 
        alignItems="flex-start" 
        sx={{ flexWrap: 'wrap', marginBottom: 2 }} // Adjust margins if needed
      >
        <Box 
          display="flex" 
          alignItems="center" 
          flexDirection={{ xs: 'row', md: 'row' }} 
          sx={{ margin: 1 }}
        >
          <Box>
            <img src={logo} style={{ width: "50px" }} alt="Logo" />
          </Box>
          <Box sx={{ marginLeft: 1 }}>
            <Typography sx={{ textTransform: "uppercase" }}>
              The Construction and Landscaping Company
            </Typography>
          </Box>
        </Box>

        <Box sx={{ margin: 1 }}>
          <Typography sx={{ textTransform: "uppercase" }}>
            Business Hours:<br />
            Monday - Friday: 8 AM - 6 PM<br />
            Saturday: 9 AM - 4 PM<br />
            Sunday: Closed<br />
          </Typography>
        </Box>
        
        <Box sx={{ margin: 1 }}>
          <Typography>
            Quick Links:
          </Typography>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </Box>

        <Box sx={{ margin: 1 }}>
          <Typography>
            Awards and Certifications:
          </Typography>
          <ul>
            <li>“Proud member of the National Association of Landscape Professionals”</li>
            <li>“Certified Green Builder”</li>
          </ul>
        </Box>
      </Box>
      <Box >
        <img src={logofacebook} style={{width:"20px",margin:"5px"}}/>
        <img src={logoinstagram} style={{width:"20px",margin:"5px"}}/>
      </Box>

      <Box sx={{ textAlign: 'center', padding: 1 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()}  Z and N Construction and Landscaping. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer;
