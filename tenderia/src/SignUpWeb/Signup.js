import React, { useState, useEffect } from 'react';
import bg from '../res/bg.jpg';
import { Mail, Person, AssignmentInd, Lock } from '@material-ui/icons';
//import './login.css';
import { TextField, Paper, Box, Button, InputAdornment } from '@material-ui/core';
import MaterialUiPhoneNumber from 'material-ui-phone-number';
import firebase from '../utils/firebase';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import {AuthContext}  from '../utils/Auth.js';
const Signup = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [hasError, setError] = useState(false);
    const [errorMSG, setErrorMSG] = useState('');
    const curr = React.useContext(AuthContext);
    const styles = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover'
    }
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    let history = useHistory();
    const submitHandler = () => {
        if (validateEmail(user)) {
            firebase.auth().createUserWithEmailAndPassword(user, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    writeUserData(user.uid, name, id, phone)
                    //history.push("/user");
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    setError(true)
                    setErrorMSG(errorMessage)
                });
        }
    }
    const writeUserData = (userId, name, id, phone) => {
        firebase.database().ref('usuario/' + userId).set({
            nombre: name,
            telefono: phone,
            cedula: id
        });
    }
    if(!!curr.currentUser){
        history.push("/user");
    }
    return (
        <div style={styles}>
            <Box p={2} mx="auto">
                <Paper>
                    <Box p={2} style={{ textAlign: 'center' }}>
                        <h1 style={{ fontWeight: '600' }}>StoreManager</h1>
                        <p>Registrate</p>
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
                            style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
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
                </Paper>
            </Box>
        </div>
    )
}
export default Signup;