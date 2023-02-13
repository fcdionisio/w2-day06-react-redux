import React from 'react';
import {
    Typography, AppBar,
    CssBaseline, Toolbar
}
    from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';


const MenuTop = () => {
    return (
        <>
            <CssBaseline />  {/* need to add */}
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography >
                        Daily Assignment - React Redux
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default MenuTop;
