import React from 'react';
import { Grid, Box, Typography, Button, useTheme } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgBefor from "../../../../images/Rectangle_69.png";
import imgButton from "../../../../logos/Vector.png";
import image1 from "../../../../images/Rectangle_39.png";
import image2 from "../../../../images/Rectangle_40.png";
import image3 from "../../../../images/Rectangle_41.png";
import image4 from "../../../../images/Rectangle_42.png";
import image5 from "../../../../images/Rectangle_43.png";
import image6 from "../../../../images/Rectangle_44.png";
import image7 from "../../../../images/Rectangle_45.png";
import "../../SliderCss/slider.css"; // Add a CSS file for custom slider styles

const Floors = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor = isDarkMode ? '#FFFFFF' : '#121C17';
    const iconColorFilter = isDarkMode 
        ? 'brightness(0) saturate(100%) invert(14%) sepia(90%) saturate(749%) hue-rotate(133deg) brightness(100%) contrast(102%)' 
        : 'none';

    const productsFloors = [
        { shade: 'Light Shade', type: 'Butterscotch Oak', image: image1 }, 
        { shade: 'Dark Shade', type: 'Butterscotch Oak', image: image2 }, 
        { shade: '#Shade', type: '#Type', image: image3 },
        { shade: '#Shade', type: '#Type', image: image4 },
        { shade: '#Shade', type: '#Type', image: image5 },
        { shade: '#Shade', type: '#Type', image: image6 },
        { shade: '#Shade', type: '#Type', image: image7 },
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960, // tablet
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600, // mobile
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <Grid container spacing={2} sx={{ marginBottom: '4rem' }}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor, textTransform: "uppercase" }}>
                    <img src={imgBefor} style={{ position: "absolute", left: "0%", width: "30px", height: "30px", filter: iconColorFilter }} />
                    FLOORS
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} textAlign="right">
                <Button variant="contained" sx={{ backgroundColor: '#004d40', color: '#fff' }}>
                    View All
                    <img src={imgButton} style={{ width: "15px", margin: "5px" }} />
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Slider {...settings} className={isDarkMode ? "slider-dark" : "slider-light"}>
                    {productsFloors.map((product, index) => (
                        <div key={index} style={{ padding: '0 10px' }}>
                            <Box
                                sx={{
                                    height: '200px',
                                    backgroundImage: `url(${product.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    backgroundColor: 'white',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    padding: '10px',
                                    margin: "20px"
                                }}
                            >
                                <Typography variant="body1" sx={{ color: (index === 0 || index === 2 || index === 3) ? '#fff' : '#000', fontWeight: 'bold' }}>
                                    {product.shade} <br /> {product.type}
                                </Typography>
                            </Box>
                        </div>
                    ))}
                </Slider>
            </Grid>
        </Grid>
    );
};

export default Floors;
