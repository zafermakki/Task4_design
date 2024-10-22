import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logoSite from "../../../logos/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

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

const NavbarLanding = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md')); // Check if the screen is medium or small

  const navigate = useNavigate();

  // Handle menu open
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar 
        position="fixed" 
        style={{ 
          height: '79px', 
          justifyContent: 'center', 
          margin: 0, 
          padding: 0, 
          background: "linear-gradient(90deg, #074143 0%, #0E7E83 100%)" 
        }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 0 }}>
            <img src={logoSite} style={{ width: "60px" }} alt="Logo" />
          </IconButton>

          {!isSmallScreen && ( // Conditionally render the text based on screen size
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ flexGrow: 1, textTransform: "uppercase", fontSize: "15px", display: 'flex', alignItems: 'center' }}
            >
              The Construction and<br />landscaping company
              <hr 
                style={{
                  width: '1px',
                  height: '79px',
                  backgroundColor: 'white',
                  border: 'none',
                  marginLeft: '10px',
                }} 
              />
            </Typography>
          )}
          
          {!isSmallScreen && (
             <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 8, textTransform: "uppercase", fontSize: "15px" }}>
                  home
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 8, textTransform: "uppercase", fontSize: "15px" }}>
                  about us
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 80, textTransform: "uppercase", fontSize: "15px" }}>
                  projects
                </Typography>
              </>
          )}

          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}> 
            <Search sx={{ mr: 2 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {/* Menu Icon for dropdown */}
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>

            {/* Dropdown menu items */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  padding: '16px',
                  textTransform: "uppercase",
                },
              }}
            >
              {/* Close Button inside the menu */}
              <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                <IconButton onClick={handleMenuClose}>
                  <CloseIcon sx={{ color: "#000" }} />
                </IconButton>
              </Box>
              <MenuItem onClick={handleMenuClose}>landscaping</MenuItem>
              <MenuItem onClick={handleMenuClose}>decking</MenuItem>
              <MenuItem onClick={handleMenuClose}>gardening</MenuItem>
              <MenuItem onClick={handleMenuClose}>interlocking</MenuItem>
              <MenuItem onClick={handleMenuClose}>floral design</MenuItem>
              <MenuItem onClick={handleMenuClose}>pools</MenuItem>
              <MenuItem onClick={handleMenuClose}>railings</MenuItem>
              <MenuItem onClick={handleMenuClose}>woodworking</MenuItem>
              <MenuItem onClick={handleMenuClose}>showroom</MenuItem>
              <MenuItem onClick={() => navigate('/profile')}>profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>contact us</MenuItem>

              {isSmallScreen && (
                <>
                  <MenuItem onClick={handleMenuClose} sx={{
                    color:"#0E7E83",
                    fontWeight:"600"
                  }}>The List</MenuItem>
                  <MenuItem onClick={handleMenuClose}>home</MenuItem>
                  <MenuItem onClick={handleMenuClose}>about us</MenuItem>
                  <MenuItem onClick={handleMenuClose}>projects</MenuItem>
                </>
              )}
            </Menu>

            <Button color="inherit" sx={{ ml: 2 }}>Book Now</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarLanding;
