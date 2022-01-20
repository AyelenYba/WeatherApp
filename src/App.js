import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import Form from './components/Form';
import Error from './components/error/Error';
import Spinner from './components/loader/Spinner';
import { Box, Paper, CssBaseline} from '@mui/material';
import Image from './images/rodion-kutsaev-8P-uQaTd8rw-unsplash.jpg'

const App = () => {

    const [forecast, setForecast ] = useState('');
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const KEY = 'f38c1572bad64fcb93342449220301';

    useEffect(()=> {
        if(location) {
            getForecast();
        }
    }, [location]);

    
    const getForecast = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=6&aqi=no&alerts=no`);
            if (response.status !== 200) {
                const errorMessage =  { code : response.status, message : 'response not ok' };
                throw errorMessage;
            }
            const data = await response.json();
            console.log(data);
            setForecast(data); 
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setLoading(false); 
        }
    };

    const styles = {
        paper: {
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            minHeight: "100vh"
        },
    }

    return (
        <Paper style={styles.paper}>
            <CssBaseline />
            <Box sx={{ pt: "1.8rem"}}>
                <Form location={location} setLocation={setLocation} />
                {error && <Error />}
                {loading && <Spinner />}
                {forecast && <Weather forecast={forecast} /> }
            </Box>
        </Paper>

    );
};

export default App;