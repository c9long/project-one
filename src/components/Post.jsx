import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Card sx={{margin: 5}} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert/>
            </IconButton>
          }
          title="John Doe"
          subheader="September 02, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox aria-label="add to favorites" icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}} />} />
          <IconButton aria-label="share">
            <Share/>
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post