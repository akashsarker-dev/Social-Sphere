import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PeopleIcon from "@mui/icons-material/People";
import NestedModal from "../../pages/upload/Upload";
import PostOption from "../../pages/postoption/PostOption";
import ProfileModal from "../profilemodal/ProfileModal"
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Grid container for layout */}
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Navigation Icons */}
          <Grid item xs={3}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid sx={{  display: "flex", justifyContent: "space-around",
              alignItems: "center", }} xs={6} >
              <Link style={{color:'#fff' }} to='/'>
              <HomeIcon />
              </Link>
            <IconButton color="inherit">
            <PeopleIcon />
            </IconButton>
            <IconButton color="inherit">
            <ExploreOutlinedIcon />
            </IconButton>
            
          </Grid>

          {/* Profile Icon and Menu */}
          <Grid item xs={3} container justifyContent="flex-end">
            <PostOption></PostOption>
            <NestedModal></NestedModal>
            <ProfileModal></ProfileModal>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
