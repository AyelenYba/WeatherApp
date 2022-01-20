import { Grid, Input, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Form = ({ setLocation  }) => {

    const [input, setInput] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!input || input === '') return;
        setLocation(input);
    }

    return (
        <Grid container justifyContent="center" >
            <form onSubmit={onSubmit}>
                <Input 
                aria-label="location"
                type="text"
                placeholder="Enter city name"
                required
                value={input}
                color="secondary"
                sx={{
                    background: "rgba( 255, 255, 255, 0.55 )",
                    boxShadow: "0 8px 36px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 3.5px )",
                    borderRadius: "5px",
                    fontSize: "0.96rem",
                    p: 1
                }}
                onChange={e => setInput(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
            </form>
        </Grid>
    )
};

export default Form;