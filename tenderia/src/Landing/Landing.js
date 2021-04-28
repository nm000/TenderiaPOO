import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
    const styles = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div style={styles}>
            <div>
                <h1>StoreManager</h1>
                <p>La mejor manera de manejar tu tienda de forma digital</p>
                <Link to="/login"><Button variant="contained">Ingresar</Button></Link>
                <br></br>
                <br></br>
                <Link to="/sign-up"><Button variant="contained" color="secondary">Registrarse</Button></Link>
            </div>
        </div>
    )
}
export default Landing;