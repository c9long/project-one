import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { React, useState } from 'react';
import { BakeryDining, Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Project One
        </Typography>
        <BakeryDining sx={{ display: { xs: "block", sm: "none" } }}/>
        <SearchBar><InputBase placeholder='Search...'/></SearchBar>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications/>
          </Badge>
          <Avatar
            sx={{width:30, height:30}}
            src='https://c.tenor.com/OLtFOaBgVSYAAAAC/ping-aaaaaaa.gif'
            onClick={(e) => setOpen(true)} />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{width:30, height:30}}
            src='https://c.tenor.com/OLtFOaBgVSYAAAAC/ping-aaaaaaa.gif' />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar