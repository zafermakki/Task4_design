import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const NavbarLD = () => {
  const [t, i18n] = useTranslation();

  return (
    <AppBar position="static" style={{ height: '79px', justifyContent: 'center', margin: 0, padding: 0,background: " #59ED9F" }}>
        <Typography variant="h6" component="div" sx={{ marginLeft:"2rem",textTransform:"uppercase",color:"#121C17",marginRight:"1rem" }}>
            {t('landscaping_Department')}
          </Typography>
    </AppBar>
  )
}

export default NavbarLD