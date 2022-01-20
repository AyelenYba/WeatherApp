import { Typography, Icon, Box } from '@mui/material';
import React from 'react';


const CurrentDetails = ({ forecast, small, medium}) => {

    const forecastDay = forecast.forecast.forecastday[0].day; 

    return (
        
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: small ? "center" : "left",
                p: 2,
                letterSpacing: 2,
                }}
        >
            <Typography variant={medium ? "body2" : "body1"} sx={{ lineHeight: 2.3, letterSpacing: 1.1, display: "flex", my: 0.5}}>
                <Icon baseClassName="fas" className="fas fa-cloud-rain" sx={{ mr: 1, color: "#9fa8da"}} /> 
                Chance of rain {forecastDay.daily_chance_of_rain}%
            </Typography >
 
            <Typography variant={medium ? "body2" : "body1"} sx={{ lineHeight: 2.3, letterSpacing: 1.1, display: "flex", my: 0.5}}>
                <Icon baseClassName="fas" className="fas fa-snowflake" sx={{ mr: 1, color: "#80deea"}} /> 
                Chance of snow {forecastDay.daily_chance_of_snow}%
            </Typography >

            <Typography variant={medium ? "body2" : "body1"} sx={{ lineHeight: 2.3, letterSpacing: 1.1, display: "flex", my: 0.5}}>
                <Icon baseClassName="fas" className="fas fa-wind" sx={{ mr: 1, color: "grey.500"}} /> 
                Wind {forecast.current.wind_kph} km/h
            </Typography >

            <Typography variant={medium ? "body2" : "body1"} sx={{ lineHeight: 2.3, letterSpacing: 1.1, display: "flex", my: 0.5}}>
                <Icon baseClassName="fas" className="fas fa-tint" sx={{ mr: 1, color: "#64b5f6"}} ></Icon>
                Humidity {forecast.current.humidity}%
            </Typography >
             
 
             
 
             
        </ Box> 
    )
};

export default CurrentDetails;
