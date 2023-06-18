import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import PostEditor from './Editor';
import PostPreview from './Preview';
import { PostProvider } from '../../../context/PostContext';


const useStyles = makeStyles((theme) => ({

  root: {
/* height: 'calc(100% - 4rem)', ///4rem=64px(nesta config, fica total na pag sem faltar) | 4.375rem=70 px (corta um pedaço, não ficando na total páginal. Mas é a config que foi recomendado por conta da padding. Talvez seja a diferença de tamanho de tela talvez?)
overflow: "auto", //scroll está estranho porque fica lá eterno mesmo que n precise. Foi colocado o auto para aparecer só quando precisar */
  },

  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    background: "#696158",
  },

  button1: {
    marginRight: theme.spacing(2),
    color: "white",
  },

  button2: {
    color: "#b9b100",
    borderColor: "#b9b100",
  },

}));


function NewPost() {
  
  const classes = useStyles();


  return (
    
    <PostProvider>
      
      <Box display="flex" height="calc(100% - 4rem)" overflow="auto">
        
        <Box width="50%" heigth="100%" padding={2} borderRight="1px solid #DDD">

          <PostEditor />
  
        </Box>

        <Box width="50%" heigth="100%" padding={2} >
          <PostPreview />
        </Box>
        
      </Box>

      <AppBar position="fixed" color="inherit" className={classes.appBar} >

        <Toolbar>
          <Button className={classes.button1}>Salvar Rascunho</Button>
          <Button variant="outlined" className={classes.button2} >Publicar</Button>
        </Toolbar>
         
      </AppBar>
      
    </PostProvider>
  )
}

export default NewPost;