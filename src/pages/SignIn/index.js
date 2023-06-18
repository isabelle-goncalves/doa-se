import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux';

import  { signIn }  from '../../actions/accountActions';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: "#d9d9d9;",
    },
    left: {
        backgroundColor: '#2e6171',
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        padding: theme.spacing(2),
        textAlign: "center",
    },
    box: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: theme.spacing(8), //"4rem"
        paddingBottom: theme.spacing(3),
        background: "#d9d9d9;",
    },
    avatar: {
        backgroundColor: "#b0902c",
        marginBottom: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(2, 0),
    },
    form: {
        margin: theme.spacing(2, 4),
    },
    link: {
        marginRight: theme.spacing(1),
    },
    link2: {
        marginLeft: theme.spacing(5),
    },
    errorMessage: {
        fontSize: "14pt",
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
        textAlign: "center",
    }

}));

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            Isabelle Gonçalves
            {' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();
   
    async function handleSignIn() {
      try {
        await dispatch(signIn(email, password));      
        navigate('/feed');
      } catch (error) {      
        setErrorMessage(error.response.data.message);
      }
    }
    return (
        <Grid container className={classes.root}>
            <Grid item container className={classes.left} md={7}>
                <Typography style={{color:'#FFF', fontSize: 35, lineHeight: '45px'}}>
                    <strong>A nova plataforma para doações</strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize:15, lineHeight: '1.9rem',}}>
                    Faça login agora mesmo!
                </Typography>
            </Grid>

            <Grid item md={5}>
                <Box className={classes.box} >
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Button 
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={handleSignIn}>
                        Entrar
                        </Button>
                        {
                        errorMessage &&
                        <FormHelperText 
                            className={classes.errorMessage} 
                            error>
                            {errorMessage}
                        </FormHelperText>
                        }
                        
                        <Grid container>
                            <Grid item className={classes.link}>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item className={classes.link2}>
                            Não tem uma conta? <Link>Crie sua conta</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn;