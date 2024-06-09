import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../../assets/logoEllo.svg';
import {Typography} from "@mui/material";

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{bgcolor:'primary.contrastText'}}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={Logo} alt="logo" style={{width: '50px', height: '50px'}}/>
                    </Box>
                    <Box>
                        <Typography variant="body1">Discover Ello | Teacher's Portal</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}