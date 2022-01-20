import React from 'react';
import { Box, CircularProgress  } from '@mui/material';

const Spinner = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mt: "5rem"}} >
            <CircularProgress color="secondary"/>
        </Box>
    );
};

export default Spinner;