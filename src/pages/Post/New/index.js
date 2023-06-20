import React from 'react';
import { Helmet } from 'react-helmet';
import Box from '@material-ui/core/Box';

import PostEditor from './Editor';
import PostPreview from './Preview';
import BottomBar from './BottomBar';
import { PostProvider } from '../../../context/PostContext';
    /*
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

height: 'calc(100vh - 11rem)', ///4rem=64px(nesta config, fica total na pag sem faltar) | 4.375rem=70 px (corta um pedaço, não ficando na total páginal. Mas é a config que foi recomendado por conta da padding. Talvez seja a diferença de tamanho de tela talvez?)
overflow: "auto", //scroll está estranho porque fica lá eterno mesmo que n precise. Foi colocado o auto para aparecer só quando precisar 

},
}));

const classes = useStyles();
*/

function NewPost() {
  return (
    <div >
    <PostProvider>
        <Helmet>
          <title>Doa-se | Criação de Post</title>
        </Helmet>  
      <Box display="flex" height="calc(100vh - 11rem);" overflow="auto">
        
        <Box width="50%" heigth="100%" padding={2} borderRight="1px solid #DDD">

          <PostEditor />
  
        </Box>

        <Box width="50%" heigth="100%" padding={2} >
          <PostPreview />
        </Box>
        
      </Box>

      <BottomBar />
      
    </PostProvider>
    </div>
  )
}

export default NewPost;