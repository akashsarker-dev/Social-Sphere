import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import Hidden from '@mui/material/Hidden';

const Sidebar = () => {
  return (

      <List>
        <Hidden mdUp implementation="css">
          {/* This will hide the text on medium-sized screens and above */}
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
          </ListItem>
        </Hidden>

        <Hidden mdDown implementation="css">
          {/* This will show the text on small screens */}
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
        </Hidden>

        {/* Add more list items as needed */}
      </List>
  );
};

export default Sidebar;
