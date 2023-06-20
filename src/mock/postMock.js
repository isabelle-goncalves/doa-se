import moment from 'moment';
import mock from '../utils/mock';


mock.onGet('/api/post/doacao-de-camera').reply(200, {
  id: 1,
  title: 'Doação de Câmera',
  slug: 'doacao-de-camera',
  description: 'Estou doando minha câmera antiga. Em perfeita condição.',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Hosana',
    username: 'hosanab',
    avatar: '/images/avatars/alien.png'
  },
  markdownText: 
  ``,
    tags: ['camera', 'doacao', 'antiga'],
    image: '/images/posts/camera.jpg',
    likes: 10,
    comments: 1,
});

mock.onGet('/api/post/doacao-de-roupas').reply(200, {
  id: 2,
  title: 'Doação de roupas',
  slug: 'doacao-de-roupas',
  description: 'Olá, estou doando as roupas da foto. O tamanho é 42 das duas peças.',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 2,
    name: 'Isabele',
    username: 'isabelem',
    avatar: '/images/avatars/cat.png'
  },
  markdownText: ``,
  tags: ['roupas', 'doacao', 'vintage'],
  image: '/images/posts/roupa.png',
    likes: 5,
    comments: 0,
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title: 'Doação de Câmera',
      slug: 'doacao-de-camera',
      description: 'Estou doando minha câmera antiga. Em perfeita condição.',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Hosana',
        username: 'hosanab',
        avatar: '/images/avatars/alien.png'
      },
      tags: ['camera', 'doacao', 'antiga'],
      image: '/images/posts/camera.jpg',
      likes: 10,
      comments: 1,
    }, 
    {
      id: 2,
      title: 'Doação de roupas',
      slug: 'doacao-de-roupas',
      description: 'Olá, estou doando as roupas da foto. O tamanho é 42 das duas peças.',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 2,
        name: 'Isabele',
        username: 'isabelem',
        avatar: '/images/avatars/cat.png'
      },
      tags: ['roupas', 'doacao', 'vintage'],
      image: '/images/posts/roupa.png',
      likes: 5,
      comments: 0,
    },
  ]

});
mock.onGet('/api/posts/user/hosanab').reply(200, {
  posts: [
    {
      id: 1,
      title: 'Doação de Câmera',
      slug: 'doacao-de-camera',
      description: 'Estou doando minha câmera antiga. Em perfeita condição.',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Hosana',
        username: 'hosanab',
        avatar: '/images/avatars/alien.png'
      },
      tags: ['camera', 'doacao', 'antiga'],
      image: '/images/posts/camera.jpg',
      likes: 10,
      comments: 1,
    }
  ]

});

mock.onGet('api/posts/user/isabelem').reply(200, {
  posts: [ 
    {
      id: 2,
      title: 'Doação de roupas',
      slug: 'doacao-de-roupas',
      description: 'Olá, estou doando as roupas da foto. O tamanho é 42 das duas peças.',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 2,
        name: 'Isabele',
        username: 'isabelem',
        avatar: '/images/avatars/cat.png'
      },
      tags: ['roupas', 'doacao', 'vintage'],
      image: '/images/posts/roupa.png',
      likes: 5,
    comments: 0,
    }
  ]
});

/*
const posts = [
  {
    id: ,
    title: '',
    slug: '',
    date: moment().subtract(1, 'day').toDate().getTime(),
    author: {
      id: 1,
      name: 'Hosana',
      username: 'hosanab',
      avatar: '/images/avatars/alien.png'
    },
    tags: ['camera', 'doacao', 'antiga'],
    image: '/images/posts/camera.jpg',
    likes: 10,
    comments: 1,
  }
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
*/