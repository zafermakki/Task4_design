import React from 'react';
import { Grid, Box, Typography, Button, useTheme } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgBefor from "../../../../images/Rectangle_69.png";
import imgButton from "../../../../logos/Vector.png";
import "../../SliderCss/slider.css";
// Importing images

import image1 from "../../../../images/Rectangle_46.png";
import image2 from "../../../../images/Rectangle_47.png";
import image3 from "../../../../images/Rectangle_48.png";

const Walls = () => {

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor = isDarkMode ? '#FFFFFF' : '#121C17';
    const iconColorFilter = isDarkMode 
        ? 'brightness(0) saturate(100%) invert(14%) sepia(90%) saturate(749%) hue-rotate(133deg) brightness(100%) contrast(102%)' 
        : 'none';

    const productsFloors = [
        { shade: '#Shade', type: '#Type', image: image1 }, 
        { shade: '#Shade', type: '#Type', image: image2 }, 
        { shade: '#Shade', type: '#Type', image: image3 },
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
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600, // mobile
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Grid container spacing={2} sx={{ marginBottom: '4rem' }}>
            {/* Floors Heading */}
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: textColor,textTransform:"uppercase" }}>
                    <img src={imgBefor} style={{ position: "absolute", left: "0%", width: "30px", height: "30px",filter: iconColorFilter }} />
                    Walls
                </Typography>
            </Grid>

            {/* View All Button */}
            <Grid item xs={12} sm={6} textAlign="right">
                <Button variant="contained" sx={{ backgroundColor: '#004d40', color: '#fff' }}>
                    View All
                    <img src={imgButton} style={{ width: "15px", margin: "5px" }} />
                </Button>
            </Grid>

            {/* Floors Product Carousel */}
            <Grid item xs={12}>
                <Slider {...settings} className={isDarkMode ? "slider-dark" : "slider-light"}>
                    {productsFloors.map((product, index) => (
                        <div key={index} style={{ padding: '0 10px' }}>  {/* Added padding around each slide */}
                            <Box
                                sx={{
                                    height: '200px',
                                    backgroundImage: `url(${product.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center', // Ensure image is centered
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    backgroundColor: 'white',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    padding: '10px', // Add padding for the content inside
                                    margin:"20px"
                                }}
                            >
                                <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}>
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

export default Walls;
