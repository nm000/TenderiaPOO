import { Paper, Box, Grid, Icon, IconButton, Button } from "@material-ui/core";
import React from "react";
import './Proveedor.css'
//import Menu from "../Menu/Menu";
//import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Form } from 'reactstrap'
class Proveedor extends React.Component {
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
            <container>
                <Grid>
                    <Paper style={{ 'backgroundColor': '#673AB7', height: '100px', color: 'white' }}>
                        <Box style={{ 'height': '100px' }}>
                            <Icon style={{ 'fontSize': '100px' }}>local_shipping</Icon>
                        </Box>
                    </Paper>
                    <Button style={this.styles}>
                        <p className="container" >Agregar proveedor</p>
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
            </container>
            //</Menu>
        );
    }
}

export default Proveedor;
