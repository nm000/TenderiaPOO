import React, { useState } from 'react';
import Titulo from './Titulo/Titulo.jsx';
import Label from './Label/Label.jsx';
import Input from './Input/Input.jsx';
import './login.css';
import Usuario from './Inicio-Usuario/Usuario.js';

const Login = () => {
    //USER VARIABLE QUE ALMACENA ESTADO
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);
    //USESTATE CONTROLA EL ESTADO DE lAS PRIMERAS VARIABLES
    function handleChange(name, value) {
        if (name === 'usuario') {
            //Variable para almacenar
            setUser(value)
            setHasError(false);
        } else {
            if (name === 'contraseña') {
                if (value.length < 8) {
                    setPasswordError(true);
                    setHasError(false);
                } else {
                    setPasswordError(false);
                    setPassword(value)
                    setHasError(false);
                }
            }
        }
    };

    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {  //Validación de usuario y contraseña
            if (param.user === 'natalia' && param.password === '0123456789') {
                const { user, password } = param;
                let ac = { user, password }; //VARIABLES CONTENEDORAS
                let cuenta = JSON.stringify(ac);
                localStorage.setItem('cuenta', cuenta); //JSON ESTABLECIDO EN EL LOCAL STORE
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit() {
        let cuenta = { user, password }
        if (cuenta) {
            ifMatch(cuenta);
        }
    }


    console.log('usuario:', user)
    console.log('contraseña', password)



    return (
        <div className='login-contenido-fondo'>
            { isLogin ?
                <Usuario></Usuario>
                :
                <div className='login-contenido'>
                    <Titulo text='¡HOLA, PARCERO!'></Titulo>
                    {hasError &&
                        <label className='label-alerta'>
                            Contraseña incorrecta o usuario inexistente
                </label>
                    }
                    <div className='login-part'>
                        <Label text='Usuario'></Label>
                        <div className='barra'>
                            <Input
                                attribute={{
                                    id: 'usuario',
                                    name: 'usuario',
                                    type: 'text',
                                    placeholder: 'Ingrese su usuario'
                                }}
                                handleChange={handleChange}
                            ></Input>
                        </div>

                        <Label text='Contraseña'></Label>
                        <div className='barra'>
                            <Input
                                attribute={{
                                    id: 'contraseña',
                                    name: 'contraseña',
                                    type: 'password',
                                    placeholder: 'Ingrese su contraseña'
                                }}
                                handleChange={handleChange}
                                param={passwordError}
                            ></Input>
                            {passwordError &&
                                <label className='error'>
                                    Contraseña inválida
                        </label>
                            }
                            <div className='boton-contenido'>
                                <button onClick={(e) => handleSubmit()} className='boton'>
                                    INGRESAR
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
};

export default Login;

 //buttononClick//handleSubmit}