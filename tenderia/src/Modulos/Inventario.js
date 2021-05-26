import { Paper, Box, Grid, Icon, IconButton, Button } from "@material-ui/core";
import React from "react";
//import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Form } from 'reactstrap'
class Inventario extends React.Component {
    styles = {
        height: '100%',
        backgroundColor: '#255255',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        justifyContent: 'center',
    }

    render() {
        return (
            <Grid item xs={0}>
                <Paper style={{ 'backgroundColor': '#F44336', color: 'white' }}>
                    <Box>
                        <Icon fontSize="large">category</Icon>
                        <p>Inventario</p>
                    </Box>
                </Paper> 
                <Button style={this.styles} padding="50px">
                    <p>Agregar productos</p>
                </Button>
                <Button style={this.styles} margin="20px">
                    <p>Eliminar productos</p>
                </Button>
            <Button style={this.styles} margin="20px">
                <p>Modificar producto</p>
            </Button>
            </Grid>

        );
    }

}
export default Inventario;