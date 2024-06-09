import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../../assets/logoEllo.svg';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AppsIcon from '@mui/icons-material/Apps';

export default function Header() {
    const navigate = useNavigate();
    const handleRedirect = (url) => {
        navigate(url);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{bgcolor:'primary.contrastText'}}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1,cursor:'pointer'}} onClick={()=>handleRedirect('/')}>
                        <img  src={Logo} alt="logo" style={{width: '50px', height: '50px'}}/>
                    </Box>
                    <Box>
                       <IconButton
                           sx={{color:'primary.dark'}}
                           size="small"
                            onClick={()=>handleRedirect('/')}
                            >
                            <AppsIcon fontSize="small"/>
                           Home
                       </IconButton>
                        <IconButton
                           sx={{color:'primary.dark'}}
                           size="small"
                            onClick={()=>handleRedirect('/reading-list')}
                            >
                            <LibraryBooksIcon fontSize="small"/>
                           My Reading List
                       </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}