import React, { useState, useEffect } from 'react';
import bg from '../res/bg.jpg';
import { Mail, Lock } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import { TextField, Paper, Box, Button, InputAdornment, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import firebase from '../utils/firebase';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../utils/Auth.js';
import Usuario from '../classes/Usuario';
const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setSession] = useState(false);
    const [hasError, setError] = useState(false);
    const [errorMSG, setErrorMSG] = useState('');
    const curr = React.useContext(AuthContext);
    const body = {
        height: '100vh'
    }
    const boxStyles = {
        height: '100vh',
        textAlign: 'center'
    }
    const sidebar = {
        backgroundImage: `url(${bg})`,
        textAlign: 'left'
    }
    const sidebarContainer = {
        height: '100vh',
        textAlign: 'left',
        color: 'white'
    }
    let history = useHistory();
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const validatePassword = (password) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(password);
    }

    const submitHandler = () => {
        if (validateEmail(user)) {//const u = new Usuario(user, password, null, null, null);
            if (Usuario.iniciarSesion(user, password)) {
                setSession(true);
                history.push("/user");
            }
        } else {
            setError(true)
            setErrorMSG('Usuario invalido')
        }

        if (validatePassword(user)){
            if (Usuario.iniciarSesion(user,password)){
                setSession(true);
                history.push("/password");
            }
        } else {
            setError(true)
            setErrorMSG('Contraseña invalida')
        }
    }
    if (!!curr.currentUser) {
        history.push("/user");
    }
    return (
        <>
            <div>
                <Grid container style={body}>
                    <Grid item sm={8} style={sidebar}>
                        <Box style={sidebarContainer} display="flex" justifyContent="center" alignItems="center">
                            <Box p={4}>
                                <h1 style={{ fontWeight: '600', margin: 0, fontSize: '72pt' }}>StoreManager</h1>
                                <h2 style={{ fontWeight: '600', margin: 0 }}>¡Hola parcero, Bienvenido a su casa!</h2>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box style={boxStyles} component={Paper} elevation={10} display="flex" justifyContent="center" alignItems="center">
                            <Box p={4}>
                                <Box display="flex">
                                    <h1 style={{ marginLeft: '85px'}}>Iniciar sesión</h1>
                                </Box>
                                {hasError ?
                                    <Alert variant="filled" severity="error">
                                        {errorMSG}
                                    </Alert>
                                    :
                                    <></>}
                                <TextField
                                    label="Correo"
                                    name="usuario"
                                    variant="outlined"
                                    value={user}
                                    style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Mail />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) => setUser(e.target.value)}
                                ></TextField>
                                <TextField
                                    label="Contraseña"
                                    type="password"
                                    variant="outlined"
                                    name="contraseña"
                                    value={password}
                                    style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) => setPassword(e.target.value)}
                                >
                                </TextField>
                                <Button
                                    onClick={(e) => submitHandler()}
                                    variant="contained"
                                    color="primary"
                                    m={2}
                                    style={{ width: '100%' }}>
                                    Ingresar
                </Button>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <br></br>
                                        <hr></hr>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <p>¿Sin cuenta?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <br></br>
                                        <hr></hr>
                                    </Grid>
                                </Grid>
                                <Link to="sign-up" style={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        style={{ width: '100%' }}>
                                        Regístrate
                </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        </>
    )
};

export default Login;
