import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Side from '../../components/sidebar/Sidebar';
import Post from '../../components/post/Post';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Homelayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
            <Side></Side>
        </Grid>
        <Grid xs={6} sx={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Post></Post>
        </Grid>
        <Grid xs={3}>
        </Grid>

      </Grid>
    </Box>
  );
}
