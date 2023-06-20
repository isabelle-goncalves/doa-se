import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

import WritePost from './WritePost';
import Notifications from './Notifications';
import Account from './Account';
import Settings from './Settings';


const useStyles = makeStyles({
    appbar: {
        position: 'fixed', 
        backgroundColor: '#b0902c',
        boxShadow: 'none',
    },

    logo: {
        maxHeight: '3.4rem',
    },

    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },

    

});

function Header() {
    const classes = useStyles();
        
    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
              <Link to="/">
                <img src="/images/logo-sem-fundo-mini.png" alt="logo" className={classes.logo} />
              </Link>
                <div className={classes.grow} />
                
                <div className={classes.userSection}>

                    <WritePost />

                    <Box ml={2}>
                        <Notifications />
                    </Box>
                    
                    <Box ml={2}>
                      <Settings />
                    </Box>
                    
                    <Box ml={2}>
                        <Account />
                    </Box>
                    
                </div>
            </Toolbar>
        </AppBar>

);
}

export default Header;