import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    'id': 1,
    'name': 'Hosana Barcelos',
    'username': 'Hosana',
    'email': 'hosanabarcelos@sana.com',
    'avatar': '/images/avatars/alien.png'
  }

})

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);
  
    if (email !== 'hosanabarcelos@sana.com' || password !== 'alien') {
      return [400, { message: 'Seu e-mail ou senha estão incorretos' }]
    }
  
    const user = {
      id: 1,
      name: 'Hosana Barcelos',
      username: 'Hosana',
      email: 'hosanabarcelos@sana.com',
      avatar: '/images/avatars/alien.png'
    }
  
  
    return [200, { user }]
  });
