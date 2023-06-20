import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { signOut } from '../../../actions/accountActions';


function Account() {

    const account = useSelector((state) => state.account);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = !!account.user;

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSignOut = () => {
        handleClose();
        dispatch(signOut());
        navigate('/');
        
    }

    return (
        <>
        <Avatar ref={ref} onClick={handleOpen} alt="Usuário" src={account.user && account.user.avatar} />
        {
            isAuthenticated ? (
            <Menu 
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={isOpen}
                onClose={handleClose}
                getContentAnchorEl={null} 
            >
                <MenuItem onClick={() => navigate(`/${account.user?.username}`) } >Perfil</MenuItem>
                <MenuItem onClick={() => navigate(`/${account.user?.username}`) } >Meus Posts</MenuItem>
                <MenuItem>Mensagens</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair da conta</MenuItem>
            </Menu>
            ) : (
            <Menu 
            anchorEl={ref.current}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            open={isOpen}
            onClose={handleClose}
            getContentAnchorEl={null} 
            >
                <MenuItem onClick={() => navigate('/registro')}>Registrar</MenuItem>
                <MenuItem onClick={() => navigate('/login')}>Entrar</MenuItem>
            </Menu>
            )        
        }
        </>
    );
}

export default Account;