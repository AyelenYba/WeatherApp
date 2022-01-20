import { Box, Typography } from '@mui/material';
import React from 'react';

const DayWeather = ({ dayForecast }) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[new Date(dayForecast.date).getDay()];

    return (
        <Box sx={{ py: 1, px: 2}}>
            <Typography variant="subtitle1" textAlign="center">{dayName}<br/>
                <img src={dayForecast.day.condition.icon} alt=""/><br/>
                <Typography variant="subtitle2" color="grey.800">
                    {dayForecast.day.mintemp_c}°C  |  {dayForecast.day.maxtemp_c}°C
                </Typography>
            </Typography>
        </Box>
   );
};

export default DayWeather;