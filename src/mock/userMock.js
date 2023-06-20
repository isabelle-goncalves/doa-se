import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user:{
    'id': 1,
    'name': 'Hosana Barcelos',
    'username': 'hosanab',
    'email': 'hosanabarcelos@sana.com',
    'avatar': '/images/avatars/alien.png'
  }, 
  /*{
    'id': 2,
    'name': 'Isabele Moreira',
    'username': 'isabelem',
    'email': 'isabelemoreira@isa.com',
    'avatar': '/images/avatars/cat.png',
  }
*/
})

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);
  
    if (email !== 'hosanabarcelos@sana.com' || password !== 'alien') {
      return [400, { message: 'Seu e-mail ou senha estão incorretos' }]
    } 

    const user =
    {
      id: 1,
      name: 'Hosana Barcelos',
      username: 'hosanab',
      email: 'hosanabarcelos@sana.com',
      avatar: '/images/avatars/alien.png'
    }
     
    return [200, { user }]
  });

  

  mock.onGet('/api/home/user/hosanab').reply(200, {
    id: 1,
    name: 'Hosana Barcelos',
    username: 'hosanab',
    email: 'hosanabarcelos@sana.com',
    accessToken: 'dadadadadadadad',
    avatar: '/images/avatars/alien.png',
    joinedIn: '17 de maio, 2023',
    totalPost: '1',
    avaliacaoRecebida: '0',
  });

  mock.onGet('/api/home/user/isabelem').reply(200, {
    id: 1,
    name: 'Isabele Moreira',
    username: 'isabelem',
    email: 'isabelemoreira@isa.com',
    accessToken: 'babababababababa',
    avatar: '/images/avatars/cat.png',
    joinedIn: '02 de junho, 2023',
    totalPost: '2',
    avaliacaoRecebida: '1',
  });
