import { Paper, Box, Grid, Icon, IconButton, Button } from "@material-ui/core";
import React from "react";
import './Facturacion.css';
//import Menu from "../Menu/Menu";
//import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Form } from 'reactstrap'
class Facturacion extends React.Component {
    styles = {
        height: '100%',
        backgroundColor: '#00B086',
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
                    <Paper style={{ 'backgroundColor': '#4CAF50', height: '100px', color: 'white' }}>
                        <Box style={{ 'height': '100px' }}>
                            <Icon style={{ 'fontSize': '100px' }}>shopping_cart</Icon>
                        </Box>
                    </Paper>
                    <Button style={this.styles}>
                        <p className="container">Historial de compras</p>
                        <Icon fontSize="large" style={{ color: 'white', padding: '5px' }}> storage </Icon>
                    </Button>
                </Grid>
            </container>
            //</Menu>
        );
    }
}

export default Facturacion;