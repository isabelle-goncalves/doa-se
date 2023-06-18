import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import PostCard from '../../components/PostCard';
import NavBar from './NavBar';

const useStyles = makeStyles ((theme) => ({
    root: {
    }
}));
const posts = [
    {
        id: 1, 
        author: {
            id: 1,
            name: 'Hosana',
            username: 'hosanab',
            avatar: '/images/avatars/alien.png'
        },
        title: "Doação de Câmera",
        date: "May 12, 2023",
        description: 'Estou doando minha câmera antiga. Não a uso mais e estou doando coisas que não uso mais',
        hashtags: "#camera, #doacao, #antiga",
        image: "/images/posts/camera.jpg",
    },

    {
        id: 2, 
        author: {
            id: 2,
            name: 'Isabele',
            username: 'isa',
            avatar: '/images/avatars/cat.png'
        },
        title: "Doação de roupas",
        date: "May 12, 2023",
        description: 'Olá, estou doando as roupas da foto. O tamanho é 42 das duas peças.',
        hashtags: "#roupas, #doacao, #vintage",
        image: "/images/posts/roupa.png",
    },
]

function Feed() {
    const classes = useStyles();
    return (

      <Container maxWidth="lg">
        <Box display = "flex">
          <NavBar />
        <div className = {classes.root}>
            {
              posts.map(post =>(
                <PostCard key={post.id} post={post} />
                ))
              }
        </div>
        </Box>
      </Container>
           

    )
}

export default Feed;