import React, { useState, useEffect } from 'react';
import bg from '../res/bg.jpg';
import { Mail, Person, AssignmentInd, Lock } from '@material-ui/icons';
//import './login.css';
import { TextField, Paper, Box, Button, InputAdornment, Grid } from '@material-ui/core';
import MaterialUiPhoneNumber from 'material-ui-phone-number';
import firebase from '../utils/firebase';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import { AuthContext } from '../utils/Auth.js';
import Usuario from '../classes/Usuario';
const Signup = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [id, setID] = useState('');
    const [phone, setPhoneNumber] = useState('');
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
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    let history = useHistory();
    const submitHandler = () => {
        if (validateEmail(user)) {
            const u = new Usuario(user, password, name + ' ' + surname, phone, id)
            if (u.crearUsuario()) {
                history.push("/user");
            }
        }
    }
    if (!!curr.currentUser) {
        history.push("/user");
    }
    return (
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
                                <h1 style={{ margin: 'inherit' }}>Registrate</h1>
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
                                required={true}
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
                                label="Nombre"
                                variant="outlined"
                                required={true}
                                value={name}
                                style={{ width: '50%', marginTop: '10px', marginBottom: '10px' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => setName(e.target.value)}
                            ></TextField>
                            <TextField
                                label="Apellido"
                                variant="outlined"
                                required={true}
                                value={surname}
                                style={{ width: '47%', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => setSurname(e.target.value)}
                            ></TextField>
                            <TextField
                                label="Cedula"
                                variant="outlined"
                                value={id}
                                required={true}
                                style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AssignmentInd />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => setID(e.target.value)}
                            ></TextField>
                            <MaterialUiPhoneNumber
                                defaultCountry={'co'}
                                label="celular"
                                value={phone}
                                required={true}
                                variant="outlined"
                                style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
                                regions={['south-america']}
                                onChange={(e) => setPhoneNumber(e)}
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="outlined"
                                value={password}
                                required={true}
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
                                style={{ width: '100%' }}>Registrate</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default Signup;