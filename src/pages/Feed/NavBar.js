import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles ((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: '17.2rem',
        marginRight: theme.spacing(2),
        height: '100%',
    },
    button: {
        width: '100%'
    }
}));

const tags = [
    { id: 1, name: 'roupa'},
    { id: 2, name: 'sofa'},
    { id: 3, name: 'armario'},
    { id: 4, name: 'livro'},
    { id: 5, name: 'televisao'},
    { id: 6, name: 'videogame'},
    { id: 7, name: 'guitarra'},
];

function NavBar() {
    const classes = useStyles();
    const navigate = useNavigate();

    const account = useSelector((state) => state.account);
    const isAuthenticated = !!account.user;

    return (
      <>
            <Paper className={classes.root}>
              { !isAuthenticated &&   (
                <Button variant="outlined" color="secondary" className={classes.button} onClick={() => navigate('/registro')}>Registrar</Button>
                )}

                <ListSubheader>{'Doações em alta'}</ListSubheader>

                {
                  tags.map((item) => (
                      
                      <ListItem dense button key={`item-${item.id}-${item.name}`}>
                          <ListItemText primary={`#${item.name}`} />
                      </ListItem>
                  
                  ))
                }

                <ListItem button>
                  Exibir mais Doações
                </ListItem>
              
              </Paper>
    
    </>
    
    )

  }

export default NavBar;