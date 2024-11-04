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
import{ useTheme }from "@mui/material/styles"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import i18next from 'i18next';


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

const SearchIconWrapper = styled('div')(({ theme,langDir }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: langDir === 'rtl' ? 'flex-end' : 'flex-start',
  right: langDir === 'rtl' ? 'unset': 0,
  left: langDir === 'rtl' ? 0 : 'unset',
}));

const StyledInputBase = styled(InputBase)(({ theme,langDir }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: langDir === 'rtl' ? theme.spacing(1) : `calc(1rem + ${theme.spacing(4)})`,
    paddingRight:langDir === 'rtl' ? `calc(1rem + ${theme.spacing(4)})` : theme.spacing(1),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavbarLanding = ({setmyMOde}) => {
  const [t, i18n] = useTranslation();
  const langDir = i18next.dir();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);  // Change language in i18n
    localStorage.setItem('language', language); // Store language in localStorage
  };

  const toggleMode = () => {
    setmyMOde(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
              {t('The_Construction_and')}<br />{t('landscaping_company')}
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
                  {t('home')}
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 8, textTransform: "uppercase", fontSize: "15px" }}>
                  {t('about_us')}
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 80, textTransform: "uppercase", fontSize: "15px" }}>
                  {t('projects')}
                </Typography>
              </>
          )}

          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}> 
            <Search sx={{ mr: 2 }}>
              <SearchIconWrapper langDir={langDir}>
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
              <MenuItem>
                D/L Mode
                <IconButton onClick={toggleMode} color="inherit" sx={{ ml: 2 }}>
                  {theme.palette.mode === 'dark' ? <WbSunnyIcon sx={{color:"yellow"}}/> : <DarkModeIcon />}
                </IconButton>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('ar')}>ar</MenuItem>
              <MenuItem onClick={() => changeLanguage('en')}>en</MenuItem>
              <MenuItem onClick={() => changeLanguage('tr')}>tr</MenuItem>
              <MenuItem onClick={() => changeLanguage('de')}>de</MenuItem>
              <MenuItem onClick={() => changeLanguage('fr')}>fr</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('landscaping')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('decking')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('gardening')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('interlocking')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('floral_design')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('pools')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('railings')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('woodworking')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('showroom')}</MenuItem>
              <MenuItem onClick={() => navigate('/profile')}>{t('profile')}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t('contact_us')}</MenuItem>
              
              {isSmallScreen && (
                <>
                  <MenuItem onClick={handleMenuClose} sx={{
                    color:"#0E7E83",
                    fontWeight:"600"
                  }}>The List</MenuItem>
                  <MenuItem onClick={handleMenuClose}>{t('home')}</MenuItem>
                  <MenuItem onClick={handleMenuClose}>{t('about_us')}</MenuItem>
                  <MenuItem onClick={handleMenuClose}>{t('projects')}</MenuItem>
                </>
              )}
            </Menu>
            
            <Button color="inherit" sx={{ ml: 2 }}>{t('Book_Now')}</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarLanding;
