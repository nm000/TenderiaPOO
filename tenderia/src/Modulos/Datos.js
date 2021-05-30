import { Paper, Box, Grid, Icon, IconButton, Button } from "@material-ui/core";
import React from "react";
import './Datos.css';
//import Menu from "../Menu/Menu";
//import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Form } from 'reactstrap'
class Datos extends React.Component {
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
                <Grid >
                    <Paper style={{ 'backgroundColor': '#613A17', height: '100px', color: 'white' }}>
                        <Box style={{ 'height': '100px' }}>
                            <Icon style={{ fontSize: '100px'}}> settings_application; </Icon>
                        </Box>
                        <Button style = {this.styles}>
                        <p className="container" >Actualizar datos</p>
                        <Icon fontSize="large" style={{ 'fontSize': "30px", color: 'black', padding: '7px' }}> create </Icon>
                        </Button>
                    </Paper>
                </Grid>
            </container>
            //</Menu>
        );
    }
}

export default Datos;