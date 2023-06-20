import React from 'react';
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
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import * as Yup from 'yup'

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
    const dispatch = useDispatch();
   
    return (
        <Grid container className={classes.root}>
          <Helmet>
            <title>Doa-se | Login</title>
          </Helmet>
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
                    <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Informe um email válido.')
                .max(255)
                .required('Informe um email.'),
              password: Yup.string()
                .max(255)
                .required('Informe uma senha.'),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting },
            ) => {
              try {
                await dispatch(signIn(values.email, values.password));
                navigate('/');
              } catch (error) {
                const message =
                  (error.response && error.response.data.message) ||
                  'Alguma coisa aconteceu';

                setStatus({ success: false });
                setErrors({ submit: message });
                setSubmitting(false);
              }
            }}
          >
            {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
              <form noValidate className={classes.form} onSubmit={handleSubmit}>
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
                  error={Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                  helperText={errors.email}
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
                  value={values.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                  disbled={isSubmitting}
                >
                  Entrar
                </Button>
                {errors.submit && (
                  <FormHelperText error className={classes.errorMessage}>{errors.submit}</FormHelperText>
                )}
                        
                        <Grid container>
                            <Grid item className={classes.link}>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item className={classes.link2}>
                            Não tem uma conta? <Link to="/registro">Crie sua conta</Link>
                            </Grid>
                        </Grid>
                    </form>
                        )
                      }
                    </Formik>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn;