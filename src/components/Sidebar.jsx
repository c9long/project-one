import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { People } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, bgcolor: "#ECF1F3" }}
    >
      <Box position="fixed">
        <List >
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <WorkIcon/>
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <CorporateFareIcon/>
              </ListItemIcon>
              <ListItemText primary="Companies" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <People/>
              </ListItemIcon>
              <ListItemText primary="Network" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
