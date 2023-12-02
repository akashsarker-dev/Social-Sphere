import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const CoverPhoto = styled('div')({
  width: '100%',
  height: '150px',
  backgroundColor: '#1877f2', // Facebook blue
});

const Profile = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Facebook Profile Demo</Typography>
        </Toolbar>
      </AppBar>

      <CoverPhoto />

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <Avatar sx={{ width: 80, height: 80, margin: 'auto' }}>U</Avatar>
            <Typography variant="h6" sx={{ marginTop: 2 }}>User Name</Typography>
            <Typography variant="body2" color="textSecondary">City, Country</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          {/* Add posts or other profile content here */}
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Recent Posts</Typography>
            <Typography variant="body1">Post 1 content...</Typography>
            <Typography variant="body1">Post 2 content...</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
