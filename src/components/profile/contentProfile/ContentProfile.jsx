import React from 'react';
import backimg from "../../../images/profile_image.png";
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AavatarImg from "../../../images/avatar.png";

const ContentProfile = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Grid 
      item 
      xs={12} 
      style={{ 
        position: 'relative',
        backgroundImage: `url(${backimg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '50vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
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
          background: "linear-gradient(0deg, rgba(238, 249, 243, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
          zIndex: 1
        }}
      />
      <Box sx={{
        zIndex: 3,
        position: "absolute",
        left: "2%",
        top: "75%"
      }}>
        <Stack  >
          <Avatar
            alt="Profile Avatar"
            src={AavatarImg}
            sx={{
              width:  150,
              height:  150
            }}
          />
        <Typography variant="body1" sx={{ border: "1px solid ", borderRadius: "4px" }}>
          @james_williams
        </Typography>
        </Stack>
      </Box>
    </Grid>
  );
};

export default ContentProfile;
