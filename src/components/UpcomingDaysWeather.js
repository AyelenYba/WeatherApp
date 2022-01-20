import React from 'react';
import { Box } from '@mui/material';
import DayWeather from './DayWeather';

const UpcomingDaysWeather = ({ forecast, small }) => {

    const upcomingDays = forecast.forecast.forecastday;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: small? "column" : "row",
                p: 2,  
            }}
        >
                {upcomingDays.map(dayForecast => <DayWeather dayForecast={dayForecast} key={dayForecast.date}/>)}   

        </Box>
    );
};

export default UpcomingDaysWeather;