import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from "../../../logos/logo.png"
import logofacebook from "../../../logos/facebook.png"
import logoinstagram from "../../../logos/instagram.png"
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t, i18n] = useTranslation();

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
              {t('The_Construction_and_Landscaping_Company')}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ margin: 1 }}>
          <Typography sx={{ textTransform: "uppercase" }}>
            {t('Business_Hours')}<br />
            {t('Monday_Friday')}<br />
            {t('Saturday')}<br />
            {t('Sunday')}<br />
          </Typography>
        </Box>
        
        <Box sx={{ margin: 1 }}>
          <Typography>
            {t('Quick_Links')}
          </Typography>
          <ul>
            <li>{t('home')}</li>
            <li>{t('about_us')}</li>
            <li>{t('projects')}</li>
            <li>{t('Contact')}</li>
          </ul>
        </Box>

        <Box sx={{ margin: 1 }}>
          <Typography>
            {t('Awards_and_Certifications')}
          </Typography>
          <ul>
            <li>{t('Proud_member_of_the_National_Association_of_Landscape_Professionals')}</li>
            <li>{t('Certified_Green_Builder')}</li>
          </ul>
        </Box>
      </Box>
      <Box >
        <img src={logofacebook} style={{width:"20px",margin:"5px"}}/>
        <img src={logoinstagram} style={{width:"20px",margin:"5px"}}/>
      </Box>

      <Box sx={{ textAlign: 'center', padding: 1 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()}  {t('Z_and_N_Construction_and_Landscaping_All_rights_reserved')}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer;
