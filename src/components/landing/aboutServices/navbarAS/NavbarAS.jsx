import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const NavbarAS = () => {
  return (
    <AppBar position="static" style={{ height: '79px', justifyContent: 'center', margin: 0, padding: 0,background: " #0E7E83" }}>
        <Typography variant="h6" component="div" sx={{ marginLeft:"2rem",textTransform:"uppercase",color:"#121C17" }}>
                about us and our services
          </Typography>
    </AppBar>
  )
}

export default NavbarAS