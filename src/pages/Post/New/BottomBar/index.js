import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//import { usePost } from '../../../../context/PostContext';


const useStyles = makeStyles((theme) => ({
appBar: {
  top: 'auto',
  bottom: 0,
  alignItems: 'center',
  background: "#696158",
},

buttonRascunho: {
  marginRight: theme.spacing(2),
  color: "white",
},

buttonPublicar: {
  color: "#b9b100",
  borderColor: "#b9b100",
},

}));


function BottomBar() {
  
  const classes = useStyles();


  //const ctx = usePost();


  //const handleSaveDraft = () => {
    //acessar backend e salvar o rascunho
 // };


  //const handlePublish = () => {
    //acessar o backend e publicar este post
  //};


  return(
    <AppBar position="fixed" color="inherit" className={classes.appBar} >

      <Toolbar>
        <Button className={classes.buttonRascunho}>Salvar Rascunho</Button>
        <Button variant="outlined" className={classes.buttonPublicar} >Publicar</Button>
      </Toolbar>
         
    </AppBar>
  )
}


export default BottomBar;