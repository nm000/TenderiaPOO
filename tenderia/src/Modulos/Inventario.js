import { Paper, Box, Grid, Icon, IconButton, Button } from "@material-ui/core";
import React from "react";
import '../Modulos/Inventario.css';
//import Menu from "../Menu/Menu";
//import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Form } from 'reactstrap'
class Inventario extends React.Component {
    stylesDiv = {
        height: '100%',
        backgroundColor: '#00B086',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '30px',
        justifyContent: 'center',
    }
    styles = {
        height: '100%',
        backgroundColor: '#00B086',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '30px',
        justifyContent: 'center',
        textDecoration: 'bold',
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
            <container className="body" >
                <Grid>
                    <Paper style={{ 'backgroundColor': '#F44336', color: 'white', height: '100px' }}>
                        <Box style={{ 'height': '100px' }}>
                            <Icon style={{ 'fontSize': '100px' }}>category</Icon>
                        </Box>
                    </Paper>
                    <Button style={this.styles}>
                        <p className="container" >Agregar productos</p>
                        <Icon fontSize="large" style={{ color: 'black', padding: '5px' }}> add </Icon>
                    </Button>
                    <Button style={this.styles}>
                        <p className="container" >Modificar producto</p>
                        <Icon style={{ 'fontSize': "30px", color: 'black', padding: '5px' }}> create </Icon>
                    </Button>
                    <Button style={this.stylesDelete}>
                        <p className="container">Eliminar productos</p>
                        <Icon fontSize="large" style={{ color: 'black', padding: '5px' }}> clear </Icon>
                    </Button>
                </Grid>
            </container>

            //</Menu>
        );
    }

}
export default Inventario;


/*Línea 42
<p style={{'fontSize':'large'}}>Inventario</p>
*/