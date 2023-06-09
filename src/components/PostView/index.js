import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: '100%',
    height: '100vh',
    objectFit: 'contain',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  markdown: {
    color: theme.palette.text.primary,
  }
}));

function PostView({ post }) {
  const classes = useStyles();
  const {image, title, date, author, tags, markdownText, description} = post;

  return (

    <Container maxWidth="lg">

      <Box pb={3}>
        <Typography variant="h2" color="textPrimary" >{title}</Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={2}>
        
        <Box pb={2}>
          <Avatar className={classes.avatar} src={author?.avatar} />
        </Box>
        
        <Box>
          <Typography variant="body1" color="textPrimary">{author?.name}</Typography>
          <Typography variant="body2" color="textSecondary" >
            {moment(date).fromNow()}
          </Typography>
        </Box>
      </Box>
      
      <Box mt={1} mb={2}>
        <Typography variant="body1" color="textPrimary">{description}</Typography>   
      </Box>
      
      <Box mb={2}>
        <Typography variant="body1" color="textPrimary">
          {tags?.map((item) => item).join(', ')}
        </Typography>
      </Box>
      
      { image && (
          <Box mb={2}>
            <img className={classes.imagePreview} src={image} alt="background" />
          </Box>
        )}
      <Box>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography 
            style={{cursor: 'pointer'}}
            color="textSecondary"
            variant='caption'
          >
            {post.likes}
          </Typography>
        </IconButton>
      </Box>

      <Divider />
      
      <Box pb={4}>
        <Markdown source={markdownText} className={classes.markdown}></Markdown>   
      </Box>
    
    </Container>
  );
}

export default PostView;