import React, { useState, useEffect } from 'react';
import bg from '../res/bg.jpg';
import { Mail, Lock } from '@material-ui/icons';
import { TextField, Paper, Box, Button, InputAdornment } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import firebase from '../utils/firebase';
import { Link, useHistory } from 'react-router-dom';
import {AuthContext}  from '../utils/Auth.js';
const Login = () => {
    //USER VARIABLE QUE ALMACENA ESTADO
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setSession] = useState(false);
    const [hasError, setError] = useState(false);
    const [errorMSG, setErrorMSG] = useState('');
    const curr = React.useContext(AuthContext);
    //USESTATE CONTROLA EL ESTADO DE lAS PRIMERAS VARIABLES
    const styles = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover'
    }
    let history = useHistory();
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const submitHandler = () => {
        if(validateEmail(user)){
            firebase.auth().signInWithEmailAndPassword(user, password)
            .then((userCredential) => {
                // Signed in
                setSession(true);
                history.push("/user");
            })
            .catch((error) => {
                var errorMessage = error.message;
                setError(true)
                setErrorMSG(errorMessage)
            });
        } else {
            setError(true)
            setErrorMSG('Usuario invalido')
        }
    }
    if(!!curr.currentUser){
        history.push("/user");
    }
    return (
        <>
            <div style={styles}>
                <Box p={2} mx="auto">
                    <Paper>
                        <Box p={2} style={{ textAlign: 'center' }}>
                            <h1 style={{ fontWeight: '600' }}>StoreManager</h1>
                            <p>¡Hola, Parcero!</p>
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
                            <p style={{ marginTop: '16px', fontWeight: '600' }}>¿No tienes cuenta?</p>
                            <Link to="sign-up" className='container'>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{ width: '100%' }}>
                                    Registrate
                                    </Button>
                            </Link>
                        </Box>
                    </Paper>
                </Box>
            </div>
        </>
    )
};

export default Login;
