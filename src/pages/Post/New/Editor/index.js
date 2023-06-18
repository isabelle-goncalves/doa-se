import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField  from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { usePost } from '../../../../context/PostContext';
import Title from './Title'

const useStyles = makeStyles((theme) => ({
  
  buttonInput: {
    display: "flex",
    justifyContent: "center",
  },

  image: {
    height: "220px"
  },

  textArea: {
    width: "100%",
    height: "calc(100% - 9.6rem)",
    resize: "none",
    border: "none",
    outline: "none",
    fontSize: 15,
  },

}));

const arrayTags = [
  {title: 'roupa'},
  {title: 'sofa'},
  {title: 'armario'},
  {title: 'livro'},
  {title: 'televisao'},
  {title: 'guitarra'},
  {title: 'geladeira'},
  {title: 'bolsa'},
  {title: 'cama'},
  {title: 'moveis'},
  {title: 'instrumentomusical'},
  {title: 'eletronicos'},
  {title: 'materialescolar'},
  {title: 'itemdesala'},
  {title: 'itemdecozinha'},
  {title: 'itemparaquarto'},
  {title: 'itemparavaranda'},
  {title: 'itemparabanheiro'},
  {title: 'itemparabebe'},
  {title: 'itemparacrianca'},
  {title: 'outrositens'},
]


function PostEditor() {

  const classes = useStyles();
  const ctx = usePost();

  const {
    image, 
    setImage,  
    tags, 
    setTags, 
    markdownText, 
    setMarkdownText
  } = ctx;
  

  const onDrop = useCallback(acceptedfiles => {
    const file = acceptedfiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImage(base64data);
      //setVideo(base64data);
    };
  }, 
  [setImage],
  );

  const {getRootProps, getInputProps} = useDropzone({
    onDrop, 
    multiple: false, 
    accept: "image/*"}); 
    //multiple: false (para ir só um arquivo, porém não vou mexer nisto por enquanto) 
    //accept: "image/*, video/*" (para ir dois tipos de arquivos só. Todos os tipos suportados de imagem e vidoe)
    /*video && (
      <video 
        type="video"
        src={video} 
        width="320" 
        height="240" 
        controls
      /> (para ver a prévia do vídeo. porém, junto com a prévia da imagem, não dá. aparece a imagem por algum motivo) */


  return (
    <>
      <Box mb={2} className={classes.buttonInput} {...getRootProps()}>
        <input {...getInputProps()} />
        <Button>Carregar arquivo</Button>
      </Box>

      {image && (
        <Box mb={2}>
          <img 
            src={image} 
            className={classes.image} 
            alt="background" 
          />
        </Box>
      )}

      <Box mb={2}>
        <Title />
      </Box>

      <Box mb={3}>
        <Autocomplete 
          multiple
          id="tags-standard"
          options={arrayTags}
          getOptionLabel={(option) => option.title}
          value={tags}
          onChange={setTags}
          renderInput={(params) => (
            <TextField {...params} variant="standard" placeholder="Tags"/>
          )}
        />
      </Box>
            
      <textarea placeholder='Escreva uma descrição...' className={classes.textArea} value={markdownText} onChange={setMarkdownText} />
    </>
  )
}

export default PostEditor;