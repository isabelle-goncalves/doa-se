import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import NewPost from '../Post/New/';
import Feed from '../Feed';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: 'calc(100vh - 4rem)', //4rem = 64px(nesta config, fica total na pag sem faltar) | 4.625rem = 74px(corta um pedaço, não ficando na total páginal. Mas é a config que foi recomendado por conta da padding. Talvez seja a diferença de tamanho de tela talvez?)
        padding: '1.5rem'
    },
    toolbar: {
          minHeight: '4rem', /*modificado de px(64px) para rem no cap "Aplicando estilos CSS no componente Home"*/
    },
    /*box: {
        display: 'flex'
    }*/

})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/post/new" element={<NewPost />} />
                    <Route path="*" element={<h2>Página não encontrada. <a href='/'>Clique aqui</a> para voltar a página inicial.</h2>} />
                </Routes>
                
            </main>
        </div>
    
    );
}

export default Home;