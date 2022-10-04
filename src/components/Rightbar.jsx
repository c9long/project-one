import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "None",
          sm: "block",
        }
      }}
    >
      <Box position="fixed" width={450}>
        <Typography variant="h6" fontWeight={300} mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg" />
          <Avatar alt="Travis Howard" src="https://th-thumbnailer.cdn-si-edu.com/bBoKmhmRwKgjpcq3pMMV9VldIsc=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/38/ee/38ee7aaa-abbb-4c60-b959-4b1c5c8c6989/axgpay.jpg" />
          <Avatar alt="Cindy Baker" src="https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg" />
          <Avatar alt="Agnes Walker" src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/4/30/GettyImages-1189192456.jpg.rend.hgtvcom.616.411.suffix/1619849704543.jpeg" />
          <Avatar alt="Trevor Henderson" src="https://ca-times.brightspotcdn.com/dims4/default/adde206/2147483647/strip/true/crop/1968x1033+0+38/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F56%2F42%2F3eb256aaa3e4615f87f020f35430%2Fla-apphoto-dreamworks-animation-all-hail-king-jul-20141218" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} mt={3} mb={1}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={3}>
          <ImageListItem>
            <img
              src="https://www.wellplated.com/wp-content/uploads/2018/08/Banana-Bars-recipe.jpg"
              alt="banana bars"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.simplyrecipes.com/thmb/Sy5LXtSfHcXfTkkS36kmSvubqj8=/3299x3299/smart/filters:no_upscale()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg"
              alt="banana bread"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Banana-Bread-Snack-Cakes_EXPS_FT20_22856_F_0331_1_home-15.jpg"
              alt="banana bread snack cakes"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://togetherasfamily.com/wp-content/uploads/2019/02/banana-bread-muffins-2.jpg"
              alt="cinnamon banana bread muffins"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.taste.com.au/ZWDW8DTv/taste/2016/11/banana-recipes-116963-1.jpg"
              alt="banana cake"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.self.com/photos/593f03eb4e4e9b612249997b/1:1/w_870,h_870,c_limit/Baked-Banana-Chips.jpg"
              alt="banana chips"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={3} mb={1}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar