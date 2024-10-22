import React from 'react';
import backimg from "../../../images/Rectangle_31.png"
import { Grid,Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ImgContent = () => {
      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Detect small screens
  return (
    <Grid 
        item 
        xs={12} 
        style={{ 
          position: 'relative', // This makes sure the overlay and content are positioned correctly
          backgroundImage: `url(${backimg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }} 
    >
    {/* Overlay with opacity */}
    <Box 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#121C17', // Your color
        opacity: 0.5, // Adjust opacity as needed
        zIndex: 1
      }}
    />
      <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center', 
            zIndex: 2, // Ensures it appears above the overlay 
            position: 'relative' // Keeps the content on top of the overlay
          }}
        >
        <Box 
            component="p" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#fff', 
              textTransform: 'uppercase',
              fontSize: '2rem',
              mb: 2 // Adds some space between the text and the search bar
            }}
        >
              Transform your vision into reality with our<br/>
              expert construction and landscaping services<br/>
              where quality meets creativity.
          </Box>
            <Search sx={{ display: 'flex', alignItems: 'center',maxWidth:"250px",color:"#fff" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          </Box>
  </Grid>
  

  )
}
export default ImgContent


