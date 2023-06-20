import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

  function WritePost() {

    const navigate = useNavigate();
    const account = useSelector(state => state.account);
    const isAuthenticated = !!account.user;

    const handleClick = () => {
       if (isAuthenticated) {
         navigate('/post/novo-post');
       }
       else {
         navigate('/login')
       }
    }

    return (
        <Button 
            onClick={handleClick}
            variant="contained"
            color="primary" 
            
        >
            Novo Post
        </Button>
    );
}

export default WritePost;