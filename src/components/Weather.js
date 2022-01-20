import { Grid, Box, Typography, useTheme, useMediaQuery} from '@mui/material';
import React from 'react';
import '@fontsource/roboto/400.css';
import CurrentDetails from './CurrentDetails';
import UpcomingDaysWeather from './UpcomingDaysWeather';

const Weather = ({ forecast }) => {

    let date = new Date().toDateString();

    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const medium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid 
            container 
            justifyContent="center"
            alignItems="center"
            sx={{ 
                maxWidth: medium ? "80%" : "50%",
                margin: "4.3rem auto 0 auto",
                background: "rgba( 255, 255, 255, 0.36 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 3.6px )",
                borderRadius: "10px",
            }}
        >
            <Grid  
                item 
                xs={12} 
                sm={6}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                }}    
            >
                <Box sx={{ p: 2, mx: "2rem" }} >
                        <Box>
                            <Typography variant="caption" >
                                {forecast.location.name}, {forecast.location.country}
                                <br/>
                                {date}
                                <br/>
                                {forecast.current.condition.text}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", my: "1.8rem" }} >
                            <img src={forecast.current.condition.icon} alt=""/>
                            <Box >
                                <Typography variant={small ? "h4" : "h3"}>
                                    {forecast.current.temp_c}°C 
                                </Typography>
                                <Typography variant={small ? "body2" : "body1"} color="grey.700">
                                    feels like {forecast.current.feelslike_c} °C
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} justifyContent="center" alignContent="center" >
                    <CurrentDetails forecast={forecast} small={small} medium={medium}/>
                </Grid>
                <Grid item xs={12} sm={12}>        
                    <UpcomingDaysWeather forecast={forecast} small={small}/>
                </Grid>
        </Grid>
    );
};

export default Weather;