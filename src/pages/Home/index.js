import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './Header';
import NewPost from '../Post/New/';
import Feed from '../Feed';
import Post from '../Post';
import Profile from '../Profile';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.dark,
    },
    main: {
       
        padding: '1.5rem'
    },
    toolbar: {
          minHeight: '4rem', /*modificado de px(64px) para rem no cap "Aplicando estilos CSS no componente Home"*/
    },
    /*box: {
        display: 'flex'
    }*/

}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
              <title>Doa-se | Página inicial</title>
            </Helmet>
            <Header />
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/:username" element={<Profile />} />
                    <Route path="/post/novo-post" element={<NewPost />} />
                    <Route path="/post/:slug" element={<Post />} />
                    <Route path="*" element={<h2>Página não encontrada. <a href='/'>Clique aqui</a> para voltar a página inicial.</h2>} />
                </Routes>
                
            </main>
        </div>
    
    );
}

export default Home;