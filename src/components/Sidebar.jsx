import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { AccountBox, DarkMode, Handshake, Home, Settings } from '@mui/icons-material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "None",
          sm: "block",
        }
      }}
    >
      <Box position="fixed">
        <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#friends">
                <ListItemIcon>
                  <Handshake/>
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#profile">
                <ListItemIcon>
                  <AccountBox/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#settings">
                <ListItemIcon>
                  <Settings/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DarkMode/>
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
    </Box> 
    )
}

export default Sidebar