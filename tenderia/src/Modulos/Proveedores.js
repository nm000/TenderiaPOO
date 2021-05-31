import { Paper, Box, Grid, Icon, IconButton, Button } from "@material-ui/core";
import React from "react";
import './Proveedor.css';
import Proveedor from '../classes/Proovedor.js';
class Proveedores extends React.Component {
    styles = {
        height: '100%',
        backgroundColor: '#00B086',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '30px',
        justifyContent: 'center',
    }

    stylesDelete = {
        height: '100%',
        backgroundColor: '#FF0000',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '30px',
        justifyContent: 'center',
    }
    render() {
        return (
            //<Menu>
                <Grid>
                    <Paper style={{ 'backgroundColor': '#673AB7', height: '100px', color: 'white' }}>
                        <Box style={{ 'height': '100px' }}>
                            <Icon style={{ 'fontSize': '100px' }}>local_shipping</Icon>
                        </Box>
                    </Paper>
                    <Button style={this.styles}>
                        <p className="container" onClick={() => alert("click")} >Agregar proveedor</p>
                        <Icon fontSize="large" style={{ color: 'black', padding: '5px' }}> add </Icon>
                    </Button>
                    <Button style={this.styles}>
                        <p className="container" >Contactar</p>
                        <Icon fontSize="large" style={{ color: 'black', padding: '10px' }}> devices ; </Icon>
                    </Button>
                    <Button style={this.stylesDelete}>
                        <p className = "container">Eliminar proveedor</p>
                        <Icon fontSize="large" style={{ color: 'black', padding: '5px' }}> clear </Icon>
                    </Button>
                </Grid>
            //</Menu>
        );
    }
}

export default Proveedores;
