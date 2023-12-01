import React from 'react'
import { Sidebar, Menu, MenuItem,SubMenu } from 'react-pro-sidebar';

const Side = () => {
  return (
    <div>
      <Menu style={{background:'#ac9fb214'}}  transitionDuration={1000}>
        <SubMenu  label="Charts">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </div>
  )
}

export default Side
