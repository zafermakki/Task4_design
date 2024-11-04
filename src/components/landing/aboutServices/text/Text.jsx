import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';


const Text = () => {
    const [t, i18n] = useTranslation();

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor = isDarkMode ? '#FFFFFF' : '#121C17';

  return (
    <Grid container spacing={2} sx={{ marginBottom: '4rem' }}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor,textTransform:"uppercase",fontSize:"16px" }}>
                    <span style={{fontSize:"35px"}}>{t('welcome')}</span> <br/>{t('about_us_one')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor,textTransform:"uppercase",fontSize:"16px" }}>
                    <span style={{fontSize:"35px"}}>{t('Our_Mission')}</span> <br/>{t('about_us_two')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor,textTransform:"uppercase",fontSize:"16px" }}>
                    <span style={{fontSize:"35px"}}>{t('Our_Team')}</span> <br/>{t('about_us_three')}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor,textTransform:"uppercase",fontSize:"16px" }}>
                    <span style={{fontSize:"35px"}}>{t('What_We_Offer')}</span> <br/>{t('about_us_four')}
                        <br/>
                    {t('about_us_four_two')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor,textTransform:"uppercase",fontSize:"16px" }}>
                    <span style={{fontSize:"35px"}}>{t('Why_Choose_Us')}</span> <br/>{t('about_us_five')}<br/>
                            {t('about_us_five_two')}<br/>
                            {t('about_us_five_three')}<br/>
                            {t('about_us_five_four')}
                </Typography>
            </Grid>
    </Grid>
  )
}

export default Text;