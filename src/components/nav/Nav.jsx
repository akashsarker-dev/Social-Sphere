import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';



export default function BasicGrid() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box sx={{  background:'#1976d2' }}>
      <Grid maxWidth='lg' spacing={3} >
        <Grid  xs={3}>
          <>Profile</>
        </Grid>
        <Grid sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}} xs={6}>
        <HomeIcon/>
        <PeopleIcon/>
        <ExploreOutlinedIcon/>
        <OndemandVideoOutlinedIcon/>
        </Grid>
        <Grid  sx={{padding:1,display:'flex', justifyContent:'space-around', alignItems:'center'}} xs={3}>
        <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit" >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </Grid>
        
        
      </Grid>
    </Box>
  );
}