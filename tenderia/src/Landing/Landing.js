import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import landing from '../res/landing.jpeg';
import { Paper, Box } from '@material-ui/core';
const Landing = () => {
    const styles = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${landing})`,
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover'
    }
    return (
        <div style={styles}>
            <Paper>
                <Box p={2}>
                    <div>
                        <h1 m={2}>StoreManager</h1>
                        <p m={2}>La mejor manera de manejar tu tienda de forma digital</p>
                        <Link to="/login" style={{textDecoration: 'none'}}><Button variant="contained" style={{margin: '1em'}}>Ingresar</Button></Link>
                        <Link to="/sign-up" style={{textDecoration: 'none'}}><Button variant="contained" color="secondary" style={{margin: '1em'}}>Registrarse</Button></Link>
                    </div>
                </Box>
            </Paper>
        </div>
    )
}
export default Landing;