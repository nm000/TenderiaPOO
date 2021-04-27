import React, { useState } from 'react';
import bg from '../res/bg.jpg';
import { Person, Lock } from '@material-ui/icons';
//import './login.css';
import { TextField, Paper, Box, Button, InputAdornment } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Usuario from './Inicio-Usuario/Usuario.js';
const Login = () => {
    //USER VARIABLE QUE ALMACENA ESTADO
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setSession] = useState(false);
    const [hasError, setErrorMessage] = useState(false);
    //USESTATE CONTROLA EL ESTADO DE lAS PRIMERAS VARIABLES
    const styles = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover'
    }
    const submitHandler = () => {
        if (user === "natalia" && password === "0123456789") {
            setSession(true);
        } else {
            setErrorMessage(true);
            console.log(hasError)
            console.log(user)
            console.log(password)
        }
    }
    const showErrorMessage = () => {
        return (
            <Alert variant="filled" severity="error">
                Contraseña incorrecta o usuario inexistente
            </Alert>
        )
    }
    return (
        <>
            {isLogged ?
                //if user logged, show admin panel
                <Usuario></Usuario> :
                <div style={styles}>
                    <Box p={2} mx="auto">
                        <Paper>
                            <Box p={2} style={{ textAlign: 'center' }}>
                                <h1 style={{ fontWeight: '600' }}>StoreManager</h1>
                                <p>¡Hola, Parcero!</p>
                                {hasError ?
                                    <Alert variant="filled" severity="error">
                                        Contraseña incorrecta o usuario inexistente
                                    </Alert>
                                    :
                                    <></>}
                                <TextField
                                    label="Usuario"
                                    name="usuario"
                                    variant="outlined"
                                    value={user}
                                    style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
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
                                    style={{ width: '100%' }}>Ingresar</Button>
                            </Box>
                        </Paper>
                    </Box>
                </div>
            }
        </>
    )
};

export default Login;
