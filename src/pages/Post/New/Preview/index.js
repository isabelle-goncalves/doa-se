import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import { usePost } from '../../../../context/PostContext';


const useStyles = makeStyles((theme) => ({

  imagePreview: {
    width: "100%"
  },
  
  avatar: {
    marginRight: theme.spacing(1),
  },

}));

function PostPreview() {

  const ctx = usePost();

  const { image, title, tags, markdownText } = ctx;

  const classes = useStyles();

  const account = useSelector(state => state.account);

  return (
    <>
  
      <Box display="flex" alignItems="center" mb={2}>

        <Box>
          <Avatar className={classes.avatar} src={account.user?.avatar} />
        </Box>
                
        <Box> 
          <Typography variant="body1">{account.user?.name}</Typography>
          <Typography variant="body2" color="textSecondary" >10 meses atrás</Typography>
        </Box>
            
      </Box>

      <Box mb={2}>
        <Typography variant="h2">{title}</Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="body1">
          {tags?.map(item => item.title).join(', ')}
        </Typography>
      </Box>

      {image && (
        <Box mb={2}>
          <img 
            src={image} 
            className={classes.imagePreview} 
            alt="background" 
          />
        </Box>
      )}

      <Divider />

      <Markdown source={markdownText}></Markdown>

    </>
  )

}
export default PostPreview;