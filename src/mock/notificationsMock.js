import mock from '../utils/mock';
import moment from 'moment';

mock.onGet('/api/notifications').reply(200, {
    notifications: [
        {
            id: '5e8883f1b51cc1956a5a1ec0',
            title: 'Nova mensagem recebida',
            description: 'Você recebeu 1 nova mensagem',
            type: 'new_message', 
            createAt: moment()
                .subtract(2, 'hours')
                .toDate()
                .getTime() 
        },
        {
            id: '5e8883f7ed1486d665d8be1e',
            title: 'Novo comentário recebido',
            description: 'Você recebeu 1 nova comentário',
            type: 'new_comment', 
            createAt: moment()
                .subtract(1, 'day')
                .toDate()
                .getTime() 
        },
        {
            id: '5e8883fca0e8612044248ecf',
            title: 'Nova curtida recebida',
            description: 'Você recebeu 1 nova curtida',
            type: 'like', 
            createAt: moment()
                .subtract(3, 'days')
                .toDate()
                .getTime() 
        },
        {
            id: '5e8883fsd5tqy4fdvsq2egfh4r',
            title: 'Novo seguidor',
            description: '2 perfils começou a seguir você',
            type: 'connection', 
            createAt: moment()
                .subtract(2, 'days')
                .toDate()
                .getTime() 
        },
        
    ]
})